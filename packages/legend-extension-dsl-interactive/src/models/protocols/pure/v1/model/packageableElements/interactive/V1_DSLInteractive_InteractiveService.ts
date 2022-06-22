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
import type { V1_InteractiveAuthorization } from './V1_DSLInteractive_InteractiveAuthorization.js';
import type { V1_RawLambda } from '@finos/legend-graph';

export abstract class V1_InteractiveService implements Hashable {
  name!: string;
  authorization!: V1_InteractiveAuthorization;

  abstract get hashCode(): string;
}

export class V1_InteractiveServiceRead
  extends V1_InteractiveService
  implements Hashable
{
  query!: V1_RawLambda;

  override get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_SERVICE_READ,
      this.name,
      this.query,
    ]);
  }
}

export class V1_InteractiveServiceCreate
  extends V1_InteractiveService
  implements Hashable
{
  override get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_SERVICE_CREATE,
      this.name,
    ]);
  }
}

export class V1_InteractiveServiceUpdate
  extends V1_InteractiveService
  implements Hashable
{
  query!: V1_RawLambda;

  override get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_SERVICE_UPDATE,
      this.name,
      this.query,
    ]);
  }
}

export class V1_InteractiveServiceUpsert
  extends V1_InteractiveService
  implements Hashable
{
  query!: V1_RawLambda;

  override get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_SERVICE_UPSERT,
      this.name,
      this.query,
    ]);
  }
}

export class V1_InteractiveServiceDelete
  extends V1_InteractiveService
  implements Hashable
{
  query!: V1_RawLambda;

  override get hashCode(): string {
    return hashArray([
      INTERACTIVE_APPLICATION_HASH_STRUCTURE.INTERACTIVE_SERVICE_DELETE,
      this.name,
      this.query,
    ]);
  }
}
