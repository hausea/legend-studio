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
import { type Hashable, hashArray } from '@finos/legend-shared';

export abstract class V1_InteractiveTypeConfiguration implements Hashable {
  abstract get hashCode(): string;
}

export abstract class V1_InteractiveTypeTypeConfiguration
  extends V1_InteractiveTypeConfiguration
  implements Hashable
{
  abstract override get hashCode(): string;
}

export class V1_InteractiveTypePrimaryKeysConfiguration
  extends V1_InteractiveTypeTypeConfiguration
  implements Hashable
{
  primaryKeys!: V1_InteractiveTypePrimaryKeysPrimaryKeyConfiguration[];

  get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_TYPE_CONFIGURATION_PRIMARY_KEYS,
      hashArray(this.primaryKeys),
    ]);
  }
}

export class V1_InteractiveTypePrimaryKeysPrimaryKeyConfiguration
  extends V1_InteractiveTypeConfiguration
  implements Hashable
{
  property!: string;
  strategy!: V1_PrimaryKeyStrategy;

  get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_TYPE_CONFIGURATION_PRIMARY_KEYS_PRIMARY_KEY,
      this.property,
      this.strategy,
    ]);
  }
}

export abstract class V1_InteractiveTypePropertyConfiguration
  extends V1_InteractiveTypeConfiguration
  implements Hashable
{
  property!: string;

  abstract override get hashCode(): string;
}

export class V1_InteractiveTypeStringPropertyConfiguration
  extends V1_InteractiveTypePropertyConfiguration
  implements Hashable
{
  minLength!: number;
  maxLength!: number;

  get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_TYPE_CONFIGURATION_STRING_LENGTH,
      this.property,
      this.minLength.toString(),
      this.maxLength.toString(),
    ]);
  }
}

export enum V1_PrimaryKeyStrategy {
  NONE = 'NONE',
  MAX = 'MAX',
  SYNTHETIC = 'SYNTHETIC',
}
