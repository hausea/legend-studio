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

import type { V1_InteractiveApplication } from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveApplication';
import {
  RawLambda,
  V1_buildFullPath,
  type V1_GraphBuilderContext,
  V1_ProtocolToMetaModelRawValueSpecificationBuilder,
} from '@finos/legend-graph';
import {
  guaranteeNonEmptyString,
  guaranteeType,
  UnsupportedOperationError,
} from '@finos/legend-shared';
import { getOwnInteractiveApplication } from '../../../../../../../graphManager/DSLInteractive_GraphManagerHelper';
import {
  V1_InteractiveApplicationStore,
  V1_InteractiveApplicationStoreRelational,
} from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveApplicationStore';
import {
  InteractiveApplicationStore,
  InteractiveApplicationStoreRelational,
} from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveApplicationStore';
import {
  V1_DefaultInteractiveAuthorization,
  V1_InteractiveAuthorization,
} from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveAuthorization';
import {
  DefaultInteractiveAuthorization,
  InteractiveAuthorization,
} from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveAuthorization';
import type { V1_InteractiveType } from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveType';
import { InteractiveType } from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveType';
import {
  V1_InteractiveTypeConfiguration,
  V1_InteractiveTypePrimaryKeysConfiguration,
  V1_InteractiveTypePrimaryKeysPrimaryKeyConfiguration,
  V1_InteractiveTypeStringPropertyConfiguration,
  V1_PrimaryKeyStrategy,
} from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveConfiguration';
import {
  InteractiveTypeConfiguration,
  InteractiveTypePrimaryKeysConfiguration,
  InteractiveTypePrimaryKeysPrimaryKeyConfiguration,
  InteractiveTypeStringPropertyConfiguration,
  PrimaryKeyStrategy,
} from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveConfiguration';
import {
  V1_InteractiveService,
  V1_InteractiveServiceCreate,
  V1_InteractiveServiceRead,
} from '../../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveService';
import {
  InteractiveService,
  InteractiveServiceCreate,
  InteractiveServiceRead,
} from '../../../../../../metamodels/pure/model/packageableElements/interactive/DSLInteractive_InteractiveService';

/**********
 * interactive service
 **********/

export const V1_buildInteractiveServiceCreate = (
  protocol: V1_InteractiveServiceCreate,
  context: V1_GraphBuilderContext,
): InteractiveServiceCreate => {
  const service = new InteractiveServiceCreate();
  service.name = guaranteeNonEmptyString(
    protocol.name,
    `Interactive service 'name' field is missing or empty`,
  );
  service.authorization = V1_buildInteractiveAuthorization(
    protocol.authorization,
    context,
  );
  return service;
};

export const V1_buildInteractiveServiceRead = (
  protocol: V1_InteractiveServiceRead,
  context: V1_GraphBuilderContext,
): InteractiveServiceRead => {
  const service = new InteractiveServiceRead();
  service.name = guaranteeNonEmptyString(
    protocol.name,
    `Interactive service 'name' field is missing or empty`,
  );
  service.authorization = V1_buildInteractiveAuthorization(
    protocol.authorization,
    context,
  );
  if (protocol.query) {
    service.query = guaranteeType(
      protocol.query.accept_RawValueSpecificationVisitor(
        new V1_ProtocolToMetaModelRawValueSpecificationBuilder(context),
      ),
      RawLambda,
    );
  }
  return service;
};

export const V1_buildInteractiveService = (
  protocol: V1_InteractiveService,
  context: V1_GraphBuilderContext,
): InteractiveService => {
  if (protocol instanceof V1_InteractiveServiceRead) {
    return V1_buildInteractiveServiceRead(protocol, context);
  } else if (protocol instanceof V1_InteractiveServiceCreate) {
    return V1_buildInteractiveServiceCreate(protocol, context);
  }
  throw new UnsupportedOperationError(
    `Can't build interactive service`,
    protocol,
  );
};

/**********
 * interactive configuration
 **********/

export const V1_buildPrimaryKeyStrategy = (
  protocol: V1_PrimaryKeyStrategy,
  context: V1_GraphBuilderContext,
): PrimaryKeyStrategy => {
  if (protocol === V1_PrimaryKeyStrategy.SYNTHETIC) {
    return PrimaryKeyStrategy.SYNTHETIC;
  } else if (protocol === V1_PrimaryKeyStrategy.MAX) {
    return PrimaryKeyStrategy.MAX;
  } else {
    return PrimaryKeyStrategy.NONE;
  }
};

export const V1_buildInteractiveTypeConfigurationPrimaryKeysPrimaryKey = (
  protocol: V1_InteractiveTypePrimaryKeysPrimaryKeyConfiguration,
  context: V1_GraphBuilderContext,
): InteractiveTypePrimaryKeysPrimaryKeyConfiguration => {
  const config = new InteractiveTypePrimaryKeysPrimaryKeyConfiguration();
  config.property = guaranteeNonEmptyString(
    protocol.property,
    `Primary key configuration 'property' field is missing or empty`,
  );
  config.strategy = V1_buildPrimaryKeyStrategy(protocol.strategy, context);
  return config;
};

export const V1_buildInteractiveTypeConfigurationPrimaryKeys = (
  protocol: V1_InteractiveTypePrimaryKeysConfiguration,
  context: V1_GraphBuilderContext,
): InteractiveTypePrimaryKeysConfiguration => {
  const config = new InteractiveTypePrimaryKeysConfiguration();
  config.primaryKeys = protocol.primaryKeys.map((pk) =>
    V1_buildInteractiveTypeConfigurationPrimaryKeysPrimaryKey(pk, context),
  );
  return config;
};

export const V1_buildInteractiveTypeConfigurationStringLength = (
  protocol: V1_InteractiveTypeStringPropertyConfiguration,
  context: V1_GraphBuilderContext,
): InteractiveTypeStringPropertyConfiguration => {
  const config = new InteractiveTypeStringPropertyConfiguration();
  config.property = guaranteeNonEmptyString(
    protocol.property,
    `Primary key configuration 'property' field is missing or empty`,
  );
  config.minLength = protocol.minLength;
  config.maxLength = protocol.maxLength;
  return config;
};

export const V1_buildInteractiveTypeConfiguration = (
  protocol: V1_InteractiveTypeConfiguration,
  context: V1_GraphBuilderContext,
): InteractiveTypeConfiguration => {
  if (protocol instanceof V1_InteractiveTypePrimaryKeysConfiguration) {
    return V1_buildInteractiveTypeConfigurationPrimaryKeys(protocol, context);
  } else if (
    protocol instanceof V1_InteractiveTypeStringPropertyConfiguration
  ) {
    return V1_buildInteractiveTypeConfigurationStringLength(protocol, context);
  }
  throw new UnsupportedOperationError(
    `Can't build interactive type configuration`,
    protocol,
  );
};

/**********
 * interactive type
 **********/

export const V1_buildInteractiveType = (
  protocol: V1_InteractiveType,
  context: V1_GraphBuilderContext,
): InteractiveType => {
  const interactiveType = new InteractiveType();
  interactiveType.baseClass = guaranteeNonEmptyString(
    protocol.baseClass,
    `Interactive Application Type 'baseClass' field is missing or empty`,
  );
  // if (protocol.graphScope) {
  //   interactiveType.graphScope = guaranteeType(
  //     V1_buildValueSpecification(protocol.graphScope, context),
  //     RootGraphFetchTree);
  // }
  interactiveType.configuration = protocol.configuration.map((c) =>
    V1_buildInteractiveTypeConfiguration(c, context),
  );
  interactiveType.services = protocol.services.map((s) =>
    V1_buildInteractiveService(s, context),
  );
  return interactiveType;
};

/**********
 * interactive authorization
 **********/

export const V1_buildInteractiveAuthorization = (
  protocol: V1_InteractiveAuthorization,
  context: V1_GraphBuilderContext,
): InteractiveAuthorization => {
  if (protocol instanceof V1_DefaultInteractiveAuthorization) {
    const authorization = new DefaultInteractiveAuthorization();
    if (protocol.authorizationFunction) {
      authorization.authorizationFunction = guaranteeType(
        protocol.authorizationFunction.accept_RawValueSpecificationVisitor(
          new V1_ProtocolToMetaModelRawValueSpecificationBuilder(context),
        ),
        RawLambda,
      );
    }
    return authorization;
  }
  throw new UnsupportedOperationError(
    `Can't build interactive authorization`,
    protocol,
  );
};

/**********
 * interactive store
 **********/

export const V1_buildInteractiveStore = (
  protocol: V1_InteractiveApplicationStore,
  context: V1_GraphBuilderContext,
): InteractiveApplicationStore => {
  if (protocol instanceof V1_InteractiveApplicationStoreRelational) {
    const store = new InteractiveApplicationStoreRelational();
    if (protocol.connection) {
      store.connection = guaranteeType(
        protocol.connection.accept_RawValueSpecificationVisitor(
          new V1_ProtocolToMetaModelRawValueSpecificationBuilder(context),
        ),
        RawLambda,
      );
    }
    return store;
  }
  throw new UnsupportedOperationError(`Can't build store`, protocol);
};

/**********
 * interactive application
 **********/

export const V1_buildInteractiveApplication = (
  protocol: V1_InteractiveApplication,
  context: V1_GraphBuilderContext,
): void => {
  const path = V1_buildFullPath(protocol.package, protocol.name);
  const interactiveApplication = getOwnInteractiveApplication(
    path,
    context.currentSubGraph,
  );
  interactiveApplication.documentation = guaranteeNonEmptyString(
    protocol.documentation,
    `Interactive Application 'documentation' field is missing or empty`,
  );
  interactiveApplication.globalAuthorization = V1_buildInteractiveAuthorization(
    protocol.globalAuthorization,
    context,
  );
  interactiveApplication.store = V1_buildInteractiveStore(
    protocol.store,
    context,
  );
  interactiveApplication.types = protocol.types.map((t) =>
    V1_buildInteractiveType(t, context),
  );
};
