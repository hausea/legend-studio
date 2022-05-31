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

export enum DSL_INTERACTIVE_APPLICATION_LEGEND_STUDIO_DOCUMENTATION_KEY {
  GRAMMAR_PARSER = 'dsl-interactive__grammar-parser',
  GRAMMAR_INTERACTIVE_APPLICATION_ELEMENT = 'dsl-interactive__grammar-interactive-element',
}

export const DSL_INTERACTIVE_APPLICATION_DOCUMENTATION_ENTRIES = {
  [DSL_INTERACTIVE_APPLICATION_LEGEND_STUDIO_DOCUMENTATION_KEY.GRAMMAR_PARSER]:
    {
      markdownText: {
        value: `DSL Interactive Application (\`###InteractiveApplication\`) concerns with creating a GraphQL based CRUD application`,
      },
    },
  [DSL_INTERACTIVE_APPLICATION_LEGEND_STUDIO_DOCUMENTATION_KEY.GRAMMAR_INTERACTIVE_APPLICATION_ELEMENT]:
    {
      markdownText: {
        value: `An application element specifies an interactive application`,
      },
    },
};
