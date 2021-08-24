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

import { QueryConfig } from '../application/QueryConfig';
import { TEST_DATA__applicationVersion } from '@finos/legend-application';

export const TEST_DATA__queryConfig = {
  appName: 'test-query-app',
  env: 'test-env',
  engine: {
    url: 'https://testEngineUrl',
  },
  depot: {
    url: 'https://testMetadataUrl',
  },
};

export const TEST__getTestQueryConfig = (extraConfigData = {}): QueryConfig => {
  const config = new QueryConfig(
    {
      ...TEST_DATA__queryConfig,
      ...extraConfigData,
    },
    TEST_DATA__applicationVersion,
    '/query/',
  );
  return config;
};