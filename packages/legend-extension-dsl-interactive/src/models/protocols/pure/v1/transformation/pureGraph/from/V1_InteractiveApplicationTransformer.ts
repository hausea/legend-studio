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

import { V1_InteractiveApplication } from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveApplication';
import {
  type V1_GraphTransformerContext,
  V1_initPackageableElement,
} from '@finos/legend-graph';
import type { InteractiveApplication } from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveApplication';

/**********
 * interactive application
 **********/

export const V1_transformInteractiveApplication = (
  element: InteractiveApplication,
  context: V1_GraphTransformerContext,
): V1_InteractiveApplication => {
  const protocol = new V1_InteractiveApplication();
  V1_initPackageableElement(protocol, element);
  protocol.documentation = element.documentation;
  return protocol;
};
