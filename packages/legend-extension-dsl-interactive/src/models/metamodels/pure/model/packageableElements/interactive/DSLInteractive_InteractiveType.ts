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

import { INTERACTIVE_APPLICATION_HASH_STRUCTURE } from '../../../../../DSLInteractive_ModelUtils';
import { type Hashable, hashArray } from '@finos/legend-shared';
import type { InteractiveTypeConfiguration } from './DSLInteractive_InteractiveConfiguration';
import type { InteractiveService } from './DSLInteractive_InteractiveService';

export class InteractiveType implements Hashable {
  baseClass!: string;
  // graphScope!: RootGraphFetchTree;
  configuration!: InteractiveTypeConfiguration[];
  services!: InteractiveService[];

  get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_AUTHORIZATION_DEFAULT,
      this.baseClass,
      // this.graphScope.class.hashValue,
      // hashArray(this.graphScope.subTrees.map((st) => st.hashValue)),
      hashArray(this.configuration),
      hashArray(this.services),
    ]);
  }
}
