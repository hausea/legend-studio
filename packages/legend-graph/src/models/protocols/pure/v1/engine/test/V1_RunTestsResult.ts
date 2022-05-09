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

import { isNonNullable, SerializationFactory } from '@finos/legend-shared';
import { createModelSchema, custom, list, SKIP } from 'serializr';
import type { PureModel } from '../../../../../../graph/PureModel';
import type { TestResult } from '../../../../../metamodels/pure/test/result/TestResult';
import type { V1_TestResult } from '../../model/test/result/V1_TestResult';
import { V1_buildTestResult } from '../../transformation/pureGraph/to/helpers/V1_TestResultBuilderHelper';
import { V1_deserializeTestResult } from '../../transformation/pureProtocol/serializationHelpers/V1_TestSerializationHelper';

export class V1_RunTestsResult {
  results: V1_TestResult[] = [];
  static readonly serialization = new SerializationFactory(
    createModelSchema(V1_RunTestsResult, {
      results: list(custom((value) => SKIP, V1_deserializeTestResult)),
    }),
  );
}

export const V1_buildTestsResult = (
  results: V1_RunTestsResult,
  graph: PureModel,
): TestResult[] =>
  results.results
    .map((r) => V1_buildTestResult(r, graph))
    .filter(isNonNullable);
