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
import { type Hashable, hashArray } from '@finos/legend-shared';
import type { InteractiveAuthorization } from './DSLInteractive_InteractiveAuthorization.js';
import type { RawLambda } from '@finos/legend-graph';
import type { RawVariableExpression } from '@finos/legend-graph';

export abstract class InteractiveService implements Hashable {
  name!: string;
  authorization!: InteractiveAuthorization;
  parameters: RawVariableExpression[] = [];

  abstract get hashCode(): string;
}

export class InteractiveServiceRead
  extends InteractiveService
  implements Hashable
{
  query!: RawLambda;

  override get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_SERVICE_READ,
      this.name,
      this.query,
      hashArray(this.parameters),
    ]);
  }
}

export class InteractiveServiceCreate
  extends InteractiveService
  implements Hashable
{
  override get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_SERVICE_CREATE,
      this.name,
      hashArray(this.parameters),
    ]);
  }
}

export class InteractiveServiceUpdate
  extends InteractiveService
  implements Hashable
{
  query!: RawLambda;

  override get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_SERVICE_UPDATE,
      this.name,
      this.query,
      hashArray(this.parameters),
    ]);
  }
}

export class InteractiveServiceUpsert
  extends InteractiveService
  implements Hashable
{
  query!: RawLambda;

  override get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_SERVICE_UPSERT,
      this.name,
      this.query,
      hashArray(this.parameters),
    ]);
  }
}

export class InteractiveServiceDelete
  extends InteractiveService
  implements Hashable
{
  query!: RawLambda;

  override get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_SERVICE_DELETE,
      this.name,
      this.query,
      hashArray(this.parameters),
    ]);
  }
}
