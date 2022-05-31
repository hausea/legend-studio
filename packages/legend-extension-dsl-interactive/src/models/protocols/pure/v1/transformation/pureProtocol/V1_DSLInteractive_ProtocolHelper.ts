/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { V1_InteractiveApplication } from '../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveApplication';
import type { PureProtocolProcessorPlugin } from '@finos/legend-graph';
import { usingConstantValueSchema } from '@finos/legend-shared';
import { createModelSchema, type ModelSchema, primitive } from 'serializr';

/**********
 * interactive application
 **********/

export const V1_INTERACTIVE_APPLICATION_ELEMENT_PROTOCOL_TYPE = 'interactive';

export const V1_interactiveApplicationModelSchema = (
  plugins: PureProtocolProcessorPlugin[],
): ModelSchema<V1_InteractiveApplication> =>
  createModelSchema(V1_InteractiveApplication, {
    _type: usingConstantValueSchema(
      V1_INTERACTIVE_APPLICATION_ELEMENT_PROTOCOL_TYPE,
    ),
    documentation: primitive(),
    name: primitive(),
    // trigger: custom(
    //   (val) => V1_serializeTrigger(val),
    //   (val) => V1_deserializeTrigger(val),
    // ),
  });
