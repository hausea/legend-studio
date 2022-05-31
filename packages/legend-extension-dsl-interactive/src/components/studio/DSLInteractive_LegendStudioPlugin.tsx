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

import packageJson from '../../../package.json';
import { RocketIcon } from '@finos/legend-art';
import type { PackageableElement } from '@finos/legend-graph';
import {
  LegendStudioPlugin,
  UnsupportedElementEditorState,
  type DSL_LegendStudioPlugin_Extension,
  type EditorStore,
  type ElementEditorState,
  type ElementEditorStateCreator,
  type ElementIconGetter,
  type ElementProjectExplorerDnDTypeGetter,
  type ElementTypeGetter,
  type NewElementFromStateCreator,
  type NewElementState,
  type PureGrammarParserElementSnippetSuggestionsGetter,
  type PureGrammarParserKeywordSuggestionGetter,
  type PureGrammarTextSuggestion,
  type PureGrammarParserElementDocumentationGetter,
  type PureGrammarParserDocumentationGetter,
} from '@finos/legend-studio';
import { InteractiveApplication } from '../../models/metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveApplication';
import {
  PURE_GRAMMAR_INTERACTIVE_APPLICATION_ELEMENT_TYPE_LABEL,
  PURE_GRAMMAR_INTERACTIVE_APPLICATION_PARSER_NAME,
} from '../../graphManager/DSLInteractive_PureGraphManagerPlugin';
import {
  DSL_INTERACTIVE_APPLICATION_DOCUMENTATION_ENTRIES,
  DSL_INTERACTIVE_APPLICATION_LEGEND_STUDIO_DOCUMENTATION_KEY,
} from './DSLInteractive_LegendStudioDocumentation';
import {
  collectKeyedDocumnetationEntriesFromConfig,
  type LegendApplicationDocumentationEntry,
  type LegendApplicationKeyedDocumentationEntry,
} from '@finos/legend-application';
import { BLANK_INTERACTIVE_APPLICATION_SNIPPET } from './DSLInteractive_CodeSnippets';

const INTERACTIVE_APPLICATION_ELEMENT_TYPE = 'INTERACTIVE_APPLICATION';
const INTERACTIVE_APPLICATION_ELEMENT_PROJECT_EXPLORER_DND_TYPE =
  'PROJECT_EXPLORER_INTERACTIVE_APPLICATION';

export class DSLInteractive_LegendStudioPlugin
  extends LegendStudioPlugin
  implements DSL_LegendStudioPlugin_Extension
{
  constructor() {
    super(packageJson.extensions.studioPlugin, packageJson.version);
  }

  override getExtraKeyedDocumentationEntries(): LegendApplicationKeyedDocumentationEntry[] {
    return collectKeyedDocumnetationEntriesFromConfig(
      DSL_INTERACTIVE_APPLICATION_DOCUMENTATION_ENTRIES,
    );
  }

  getExtraSupportedElementTypes(): string[] {
    return [INTERACTIVE_APPLICATION_ELEMENT_TYPE];
  }

  getExtraElementTypeGetters(): ElementTypeGetter[] {
    return [
      (element: PackageableElement): string | undefined => {
        if (element instanceof InteractiveApplication) {
          return INTERACTIVE_APPLICATION_ELEMENT_TYPE;
        }
        return undefined;
      },
    ];
  }

  getExtraElementIconGetters(): ElementIconGetter[] {
    return [
      (type: string): React.ReactNode | undefined => {
        if (type === INTERACTIVE_APPLICATION_ELEMENT_TYPE) {
          return (
            <div className="icon icon--interactive">
              <RocketIcon />
            </div>
          );
        }
        return undefined;
      },
    ];
  }

  getExtraNewElementFromStateCreators(): NewElementFromStateCreator[] {
    return [
      (
        type: string,
        name: string,
        state: NewElementState,
      ): PackageableElement | undefined => {
        if (type === INTERACTIVE_APPLICATION_ELEMENT_TYPE) {
          return new InteractiveApplication(name);
        }
        return undefined;
      },
    ];
  }

  getExtraElementEditorStateCreators(): ElementEditorStateCreator[] {
    return [
      (
        editorStore: EditorStore,
        element: PackageableElement,
      ): ElementEditorState | undefined => {
        if (element instanceof InteractiveApplication) {
          return new UnsupportedElementEditorState(editorStore, element);
        }
        return undefined;
      },
    ];
  }

  getExtraElementProjectExplorerDnDTypeGetters(): ElementProjectExplorerDnDTypeGetter[] {
    return [
      (element: PackageableElement): string | undefined => {
        if (element instanceof InteractiveApplication) {
          return INTERACTIVE_APPLICATION_ELEMENT_PROJECT_EXPLORER_DND_TYPE;
        }
        return undefined;
      },
    ];
  }

  getExtraGrammarTextEditorDnDTypes(): string[] {
    return [INTERACTIVE_APPLICATION_ELEMENT_PROJECT_EXPLORER_DND_TYPE];
  }

  getExtraPureGrammarParserElementDocumentationGetters(): PureGrammarParserElementDocumentationGetter[] {
    return [
      (
        editorStore: EditorStore,
        parserKeyword: string,
        elementKeyword: string,
      ): LegendApplicationDocumentationEntry | undefined => {
        if (
          parserKeyword === PURE_GRAMMAR_INTERACTIVE_APPLICATION_PARSER_NAME
        ) {
          if (
            elementKeyword ===
            PURE_GRAMMAR_INTERACTIVE_APPLICATION_ELEMENT_TYPE_LABEL
          ) {
            return editorStore.applicationStore.docRegistry.getEntry(
              DSL_INTERACTIVE_APPLICATION_LEGEND_STUDIO_DOCUMENTATION_KEY.GRAMMAR_INTERACTIVE_APPLICATION_ELEMENT,
            );
          }
        }
        return undefined;
      },
    ];
  }

  getExtraPureGrammarParserDocumentationGetters(): PureGrammarParserDocumentationGetter[] {
    return [
      (
        editorStore: EditorStore,
        parserKeyword: string,
      ): LegendApplicationDocumentationEntry | undefined => {
        if (
          parserKeyword === PURE_GRAMMAR_INTERACTIVE_APPLICATION_PARSER_NAME
        ) {
          return editorStore.applicationStore.docRegistry.getEntry(
            DSL_INTERACTIVE_APPLICATION_LEGEND_STUDIO_DOCUMENTATION_KEY.GRAMMAR_PARSER,
          );
        }
        return undefined;
      },
    ];
  }

  getExtraPureGrammarParserKeywordSuggestionGetters(): PureGrammarParserKeywordSuggestionGetter[] {
    return [
      (editorStore: EditorStore): PureGrammarTextSuggestion[] => [
        {
          text: PURE_GRAMMAR_INTERACTIVE_APPLICATION_PARSER_NAME,
          description: `(dsl)`,
          documentation: editorStore.applicationStore.docRegistry.getEntry(
            DSL_INTERACTIVE_APPLICATION_LEGEND_STUDIO_DOCUMENTATION_KEY.GRAMMAR_PARSER,
          ),
          insertText: PURE_GRAMMAR_INTERACTIVE_APPLICATION_PARSER_NAME,
        },
      ],
    ];
  }

  getExtraPureGrammarParserElementSnippetSuggestionsGetters(): PureGrammarParserElementSnippetSuggestionsGetter[] {
    return [
      (
        editorStore: EditorStore,
        parserKeyword: string,
      ): PureGrammarTextSuggestion[] | undefined =>
        parserKeyword === PURE_GRAMMAR_INTERACTIVE_APPLICATION_PARSER_NAME
          ? [
              {
                text: PURE_GRAMMAR_INTERACTIVE_APPLICATION_ELEMENT_TYPE_LABEL,
                description: '(blank)',
                insertText: BLANK_INTERACTIVE_APPLICATION_SNIPPET,
              },
            ]
          : undefined,
    ];
  }
}
