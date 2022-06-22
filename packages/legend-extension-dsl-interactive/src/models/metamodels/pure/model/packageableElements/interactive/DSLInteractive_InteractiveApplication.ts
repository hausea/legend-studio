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

import { INTERACTIVE_APPLICATION_HASH_STRUCTURE } from '../../../../../DSLInteractive_ModelUtils.js';
import {
  PackageableElement,
  type PackageableElementVisitor,
} from '@finos/legend-graph';
import { type Hashable, hashArray } from '@finos/legend-shared';
import type { InteractiveApplicationStore } from './DSLInteractive_InteractiveApplicationStore.js';
import type { InteractiveAuthorization } from './DSLInteractive_InteractiveAuthorization.js';
import type { InteractiveType } from './DSLInteractive_InteractiveType.js';

export class InteractiveApplication
  extends PackageableElement
  implements Hashable
{
  documentation!: string;
  store!: InteractiveApplicationStore;
  globalAuthorization!: InteractiveAuthorization;
  types!: InteractiveType[];

  protected override get _elementHashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_APPLICATION,
      this.documentation,
      this.store,
      this.globalAuthorization,
      hashArray(this.types),
    ]);
  }

  accept_PackageableElementVisitor<T>(
    visitor: PackageableElementVisitor<T>,
  ): T {
    return visitor.visit_PackageableElement(this);
  }
}
