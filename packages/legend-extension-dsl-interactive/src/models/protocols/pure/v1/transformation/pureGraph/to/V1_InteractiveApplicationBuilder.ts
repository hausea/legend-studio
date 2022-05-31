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

import type { V1_InteractiveApplication } from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveApplication';
import {
  V1_buildFullPath,
  type V1_GraphBuilderContext,
} from '@finos/legend-graph';
import { guaranteeNonEmptyString } from '@finos/legend-shared';
import { getOwnInteractiveApplication } from '../../../../../../../graphManager/DSLInteractive_GraphManagerHelper';

/**********
 * interactive application
 **********/

export const V1_buildInteractiveApplication = (
  protocol: V1_InteractiveApplication,
  context: V1_GraphBuilderContext,
): void => {
  const path = V1_buildFullPath(protocol.package, protocol.name);
  const interactiveApplication = getOwnInteractiveApplication(
    path,
    context.currentSubGraph,
  );
  interactiveApplication.documentation = guaranteeNonEmptyString(
    protocol.documentation,
    `Interactive Application 'documentation' field is missing or empty`,
  );
};
