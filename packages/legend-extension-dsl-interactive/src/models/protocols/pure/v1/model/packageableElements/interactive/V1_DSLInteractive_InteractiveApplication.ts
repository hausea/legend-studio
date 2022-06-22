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

import { INTERACTIVE_APPLICATION_HASH_STRUCTURE } from '../../../../../../DSLInteractive_ModelUtils.js';
import {
  type PackageableElementVisitor,
  V1_PackageableElement,
  V1_PackageableElementVisitor,
} from '@finos/legend-graph';
import { type Hashable, hashArray } from '@finos/legend-shared';
import type { V1_InteractiveApplicationStore } from './V1_DSLInteractive_InteractiveApplicationStore.js';
import type { V1_InteractiveAuthorization } from './V1_DSLInteractive_InteractiveAuthorization.js';
import type { V1_InteractiveType } from './V1_DSLInteractive_InteractiveType.js';

export class V1_InteractiveApplication
  extends V1_PackageableElement
  implements Hashable
{
  documentation!: string;
  store!: V1_InteractiveApplicationStore;
  globalAuthorization!: V1_InteractiveAuthorization;
  types!: V1_InteractiveType[];

  override get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_APPLICATION,
      this.documentation,
      this.store,
      this.globalAuthorization,
      hashArray(this.types),
    ]);
  }

  accept_PackageableElementVisitor<T>(
    visitor: V1_PackageableElementVisitor<T>,
  ): T {
    return visitor.visit_PackageableElement(this);
  }
}
