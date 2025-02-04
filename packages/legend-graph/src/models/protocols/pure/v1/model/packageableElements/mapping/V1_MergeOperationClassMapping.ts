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

import { hashArray, type Hashable } from '@finos/legend-shared';
import { CORE_HASH_STRUCTURE } from '../../../../../../../MetaModelConst';
import { hashLambda } from '../../../../../../../MetaModelUtils';
import type { V1_RawLambda } from '../../rawValueSpecification/V1_RawLambda';
import type { V1_ClassMappingVisitor } from './V1_ClassMapping';
import { V1_OperationClassMapping } from './V1_OperationClassMapping';

export class V1_MergeOperationClassMapping
  extends V1_OperationClassMapping
  implements Hashable
{
  validationFunction!: V1_RawLambda; // @MARKER GENERATED MODEL DISCREPANCY --- Studio does not process lambda

  override get hashCode(): string {
    return hashArray([
      CORE_HASH_STRUCTURE.OPERATION_SET_IMPLEMENTATION,
      this.operation,
      hashArray(this.parameters),
      hashLambda(
        this.validationFunction.parameters,
        this.validationFunction.body,
      ),
    ]);
  }
  override accept_ClassMappingVisitor<T>(
    visitor: V1_ClassMappingVisitor<T>,
  ): T {
    return visitor.visit_MergeOperationClassMapping(this);
  }
}
