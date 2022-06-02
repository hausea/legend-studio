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

export abstract class InteractiveTypeConfiguration implements Hashable {
  abstract get hashCode(): string;
}

export abstract class InteractiveTypeTypeConfiguration
  extends InteractiveTypeConfiguration
  implements Hashable
{
  abstract override get hashCode(): string;
}

export class InteractiveTypePrimaryKeysConfiguration
  extends InteractiveTypeTypeConfiguration
  implements Hashable
{
  primaryKeys!: InteractiveTypePrimaryKeysPrimaryKeyConfiguration[];

  get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_TYPE_CONFIGURATION_PRIMARY_KEYS,
      hashArray(this.primaryKeys),
    ]);
  }
}

export class InteractiveTypePrimaryKeysPrimaryKeyConfiguration
  extends InteractiveTypeConfiguration
  implements Hashable
{
  property!: string;
  strategy!: PrimaryKeyStrategy;

  get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_TYPE_CONFIGURATION_PRIMARY_KEYS_PRIMARY_KEY,
      this.property,
      this.strategy,
    ]);
  }
}

export abstract class InteractiveTypePropertyConfiguration
  extends InteractiveTypeConfiguration
  implements Hashable
{
  property!: string;

  abstract override get hashCode(): string;
}

export class InteractiveTypeStringPropertyConfiguration
  extends InteractiveTypePropertyConfiguration
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

export enum PrimaryKeyStrategy {
  NONE = 'NONE',
  MAX = 'MAX',
  SYNTHETIC = 'SYNTHETIC',
}
