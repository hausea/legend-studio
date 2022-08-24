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

import { V1_InteractiveApplication } from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveApplication.js';
import {
  RawVariableExpression,
  type V1_GraphTransformerContext,
  V1_initPackageableElement,
  V1_RawLambda,
  V1_RawValueSpecificationTransformer,
  V1_transformRawLambda,
  VariableExpression,
  V1_transformRawVariableExpression,
  V1_RawVariable,
} from '@finos/legend-graph';
import type { InteractiveApplication } from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveApplication.js';
import {
  InteractiveApplicationStore,
  InteractiveApplicationStoreRelational,
} from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveApplicationStore.js';
import {
  V1_InteractiveApplicationStore,
  V1_InteractiveApplicationStoreRelational,
} from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveApplicationStore.js';
import { guaranteeType, UnsupportedOperationError } from '@finos/legend-shared';
import {
  DefaultInteractiveAuthorization,
  InteractiveAuthorization,
} from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveAuthorization.js';
import {
  V1_DefaultInteractiveAuthorization,
  V1_InteractiveAuthorization,
} from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveAuthorization.js';
import type { InteractiveType } from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveType.js';
import { V1_InteractiveType } from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveType.js';
import {
  InteractiveTypeConfiguration,
  InteractiveTypePrimaryKeysConfiguration,
  InteractiveTypePrimaryKeysPrimaryKeyConfiguration,
  InteractiveTypeStringPropertyConfiguration,
  PrimaryKeyStrategy,
} from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveConfiguration.js';
import {
  V1_InteractiveTypeConfiguration,
  V1_InteractiveTypePrimaryKeysConfiguration,
  V1_InteractiveTypePrimaryKeysPrimaryKeyConfiguration,
  V1_InteractiveTypeStringPropertyConfiguration,
  V1_PrimaryKeyStrategy,
} from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveConfiguration.js';
import {
  InteractiveService,
  InteractiveServiceCreate,
  InteractiveServiceDelete,
  InteractiveServiceRead,
  InteractiveServiceUpdate,
  InteractiveServiceUpsert,
} from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveService.js';
import {
  V1_InteractiveService,
  V1_InteractiveServiceCreate,
  V1_InteractiveServiceDelete,
  V1_InteractiveServiceRead,
  V1_InteractiveServiceUpdate,
  V1_InteractiveServiceUpsert,
} from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveService.js';
import { V1_transformRootValueSpecification } from '@finos/legend-graph';

/**********
 * interactive service
 **********/

export const V1_transformInteractiveServiceDelete = (
  element: InteractiveServiceDelete,
  context: V1_GraphTransformerContext,
): V1_InteractiveServiceDelete => {
  const protocol = new V1_InteractiveServiceDelete();
  protocol.name = element.name;
  protocol.authorization = V1_transformInteractiveAuthorization(
    element.authorization,
    context,
  );
  if (element.query) {
    protocol.query = guaranteeType(
      element.query.accept_RawValueSpecificationVisitor(
        new V1_RawValueSpecificationTransformer(context),
      ),
      V1_RawLambda,
    );
  }
  if (element.parameters) {
    protocol.parameters = element.parameters.map(
      (parameter: RawVariableExpression) =>
        V1_transformRawVariableExpression(parameter, context),
    );
  }
  return protocol;
};

export const V1_transformInteractiveServiceUpsert = (
  element: InteractiveServiceUpsert,
  context: V1_GraphTransformerContext,
): V1_InteractiveServiceUpsert => {
  const protocol = new V1_InteractiveServiceUpsert();
  protocol.name = element.name;
  protocol.authorization = V1_transformInteractiveAuthorization(
    element.authorization,
    context,
  );
  if (element.query) {
    protocol.query = guaranteeType(
      element.query.accept_RawValueSpecificationVisitor(
        new V1_RawValueSpecificationTransformer(context),
      ),
      V1_RawLambda,
    );
  }
  if (element.parameters) {
    protocol.parameters = element.parameters.map(
      (parameter: RawVariableExpression) =>
        V1_transformRawVariableExpression(parameter, context),
    );
  }
  return protocol;
};

export const V1_transformInteractiveServiceUpdate = (
  element: InteractiveServiceUpdate,
  context: V1_GraphTransformerContext,
): V1_InteractiveServiceUpdate => {
  const protocol = new V1_InteractiveServiceUpdate();
  protocol.name = element.name;
  protocol.authorization = V1_transformInteractiveAuthorization(
    element.authorization,
    context,
  );
  if (element.query) {
    protocol.query = guaranteeType(
      element.query.accept_RawValueSpecificationVisitor(
        new V1_RawValueSpecificationTransformer(context),
      ),
      V1_RawLambda,
    );
  }
  if (element.parameters) {
    protocol.parameters = element.parameters.map(
      (parameter: RawVariableExpression) =>
        V1_transformRawVariableExpression(parameter, context),
    );
  }
  return protocol;
};

export const V1_transformInteractiveServiceCreate = (
  element: InteractiveServiceCreate,
  context: V1_GraphTransformerContext,
): V1_InteractiveServiceCreate => {
  const protocol = new V1_InteractiveServiceCreate();
  protocol.name = element.name;
  protocol.authorization = V1_transformInteractiveAuthorization(
    element.authorization,
    context,
  );
  if (element.parameters) {
    protocol.parameters = element.parameters.map(
      (parameter: RawVariableExpression) =>
        V1_transformRawVariableExpression(parameter, context),
    );
  }
  return protocol;
};

export const V1_transformInteractiveServiceRead = (
  element: InteractiveServiceRead,
  context: V1_GraphTransformerContext,
): V1_InteractiveServiceRead => {
  const protocol = new V1_InteractiveServiceRead();
  protocol.name = element.name;
  protocol.authorization = V1_transformInteractiveAuthorization(
    element.authorization,
    context,
  );
  if (element.query) {
    protocol.query = guaranteeType(
      element.query.accept_RawValueSpecificationVisitor(
        new V1_RawValueSpecificationTransformer(context),
      ),
      V1_RawLambda,
    );
  }
  if (element.parameters) {
    protocol.parameters = element.parameters.map(
      (parameter: RawVariableExpression) =>
        V1_transformRawVariableExpression(parameter, context),
    );
  }
  return protocol;
};

export const V1_transformInteractiveService = (
  element: InteractiveService,
  context: V1_GraphTransformerContext,
): V1_InteractiveService => {
  if (element instanceof InteractiveServiceRead) {
    return V1_transformInteractiveServiceRead(element, context);
  }
  if (element instanceof InteractiveServiceCreate) {
    return V1_transformInteractiveServiceCreate(element, context);
  }
  if (element instanceof InteractiveServiceUpdate) {
    return V1_transformInteractiveServiceUpdate(element, context);
  }
  if (element instanceof InteractiveServiceUpsert) {
    return V1_transformInteractiveServiceUpsert(element, context);
  }
  if (element instanceof InteractiveServiceDelete) {
    return V1_transformInteractiveServiceDelete(element, context);
  }
  throw new UnsupportedOperationError(`Can't transform service '${element}'`);
};

/**********
 * interactive type configuration
 **********/

export const V1_transformPrimaryKeyStrategy = (
  element: PrimaryKeyStrategy,
  context: V1_GraphTransformerContext,
): V1_PrimaryKeyStrategy => {
  if (element === PrimaryKeyStrategy.SYNTHETIC) {
    return V1_PrimaryKeyStrategy.SYNTHETIC;
  } else if (element === PrimaryKeyStrategy.MAX) {
    return V1_PrimaryKeyStrategy.MAX;
  } else {
    return V1_PrimaryKeyStrategy.NONE;
  }
};

export const V1_transformInteractiveTypeConfigurationStringLength = (
  element: InteractiveTypeStringPropertyConfiguration,
  context: V1_GraphTransformerContext,
): V1_InteractiveTypeStringPropertyConfiguration => {
  const protocol = new V1_InteractiveTypeStringPropertyConfiguration();
  protocol.property = element.property;
  protocol.minLength = element.minLength;
  protocol.maxLength = element.maxLength;
  return protocol;
};

export const V1_transformInteractiveTypeConfigurationPrimaryKeysPrimaryKey = (
  element: InteractiveTypePrimaryKeysPrimaryKeyConfiguration,
  context: V1_GraphTransformerContext,
): V1_InteractiveTypePrimaryKeysPrimaryKeyConfiguration => {
  const protocol = new V1_InteractiveTypePrimaryKeysPrimaryKeyConfiguration();
  protocol.property = element.property;
  protocol.strategy = V1_transformPrimaryKeyStrategy(element.strategy, context);
  return protocol;
};

export const V1_transformInteractiveTypeConfigurationPrimaryKeys = (
  element: InteractiveTypePrimaryKeysConfiguration,
  context: V1_GraphTransformerContext,
): V1_InteractiveTypePrimaryKeysConfiguration => {
  const protocol = new V1_InteractiveTypePrimaryKeysConfiguration();
  protocol.primaryKeys = element.primaryKeys.map(
    (pk: InteractiveTypePrimaryKeysPrimaryKeyConfiguration) =>
      V1_transformInteractiveTypeConfigurationPrimaryKeysPrimaryKey(
        pk,
        context,
      ),
  );
  return protocol;
};

export const V1_transformInteractiveTypeConfiguration = (
  element: InteractiveTypeConfiguration,
  context: V1_GraphTransformerContext,
): V1_InteractiveTypeConfiguration => {
  if (element instanceof InteractiveTypePrimaryKeysConfiguration) {
    return V1_transformInteractiveTypeConfigurationPrimaryKeys(
      element,
      context,
    );
  }
  if (element instanceof InteractiveTypeStringPropertyConfiguration) {
    return V1_transformInteractiveTypeConfigurationStringLength(
      element,
      context,
    );
  }
  throw new UnsupportedOperationError(
    `Can't transform type configuration '${element}'`,
  );
};

/**********
 * interactive type
 **********/

export const V1_transformInteractiveType = (
  element: InteractiveType,
  context: V1_GraphTransformerContext,
): V1_InteractiveType => {
  const protocol = new V1_InteractiveType();
  protocol.baseClass = element.baseClass;
  // if (element.graphScope) {
  //   protocol.graphScope = guaranteeType(
  //     V1_transformRootValueSpecification(element.graphScope),
  //     V1_RootGraphFetchTree,
  //   );
  // }
  protocol.configuration = element.configuration.map(
    (c: InteractiveTypeConfiguration) =>
      V1_transformInteractiveTypeConfiguration(c, context),
  );
  protocol.services = element.services.map((s: InteractiveService) =>
    V1_transformInteractiveService(s, context),
  );
  return protocol;
};

/**********
 * interactive authorization
 **********/

export const V1_transformInteractiveAuthorization = (
  element: InteractiveAuthorization,
  context: V1_GraphTransformerContext,
): V1_InteractiveAuthorization => {
  if (element instanceof DefaultInteractiveAuthorization) {
    const protocol = new V1_DefaultInteractiveAuthorization();
    if (element.authorizationFunction) {
      protocol.authorizationFunction = guaranteeType(
        element.authorizationFunction.accept_RawValueSpecificationVisitor(
          new V1_RawValueSpecificationTransformer(context),
        ),
        V1_RawLambda,
      );
    }
    return protocol;
  }
  throw new UnsupportedOperationError(
    `Can't transform authorization '${element}'`,
  );
};

/**********
 * interactive store
 **********/

export const V1_transformInteractiveApplicationStore = (
  element: InteractiveApplicationStore,
  context: V1_GraphTransformerContext,
): V1_InteractiveApplicationStore => {
  if (element instanceof InteractiveApplicationStoreRelational) {
    const protocol = new V1_InteractiveApplicationStoreRelational();
    if (element.connection) {
      protocol.connection = guaranteeType(
        element.connection.accept_RawValueSpecificationVisitor(
          new V1_RawValueSpecificationTransformer(context),
        ),
        V1_RawLambda,
      );
    }
    return protocol;
  }
  throw new UnsupportedOperationError(`Can't transform store '${element}'`);
};

/**********
 * interactive application
 **********/

export const V1_transformInteractiveApplication = (
  element: InteractiveApplication,
  context: V1_GraphTransformerContext,
): V1_InteractiveApplication => {
  const protocol = new V1_InteractiveApplication();
  V1_initPackageableElement(protocol, element);
  protocol.documentation = element.documentation;
  protocol.store = V1_transformInteractiveApplicationStore(
    element.store,
    context,
  );
  protocol.globalAuthorization = V1_transformInteractiveAuthorization(
    element.globalAuthorization,
    context,
  );
  protocol.types = element.types.map((t: InteractiveType) =>
    V1_transformInteractiveType(t, context),
  );
  return protocol;
};
