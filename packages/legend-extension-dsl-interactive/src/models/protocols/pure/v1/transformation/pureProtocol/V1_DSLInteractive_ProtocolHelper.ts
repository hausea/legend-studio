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

import { V1_InteractiveApplication } from '../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveApplication.js';
import type { PureProtocolProcessorPlugin } from '@finos/legend-graph';
import {
  V1_deserializeRawValueSpecification,
  V1_deserializeValueSpecification,
  V1_serializeRawValueSpecification,
  V1_serializeValueSpecification,
} from '@finos/legend-graph';
import {
  deserializeArray,
  PlainObject,
  serializeArray,
  UnsupportedOperationError,
  usingConstantValueSchema,
} from '@finos/legend-shared';
import {
  createModelSchema,
  custom,
  deserialize,
  type ModelSchema,
  primitive,
  serialize,
} from 'serializr';
import {
  V1_InteractiveApplicationStore,
  V1_InteractiveApplicationStoreRelational,
} from '../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveApplicationStore.js';
import {
  V1_DefaultInteractiveAuthorization,
  V1_InteractiveAuthorization,
} from '../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveAuthorization.js';
import { V1_InteractiveType } from '../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveType.js';
import {
  V1_InteractiveTypeConfiguration,
  V1_InteractiveTypePrimaryKeysConfiguration,
  V1_InteractiveTypePrimaryKeysPrimaryKeyConfiguration,
  V1_InteractiveTypeStringPropertyConfiguration,
} from '../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveConfiguration.js';
import {
  V1_InteractiveService,
  V1_InteractiveServiceCreate,
  V1_InteractiveServiceDelete,
  V1_InteractiveServiceRead,
  V1_InteractiveServiceUpdate,
  V1_InteractiveServiceUpsert,
} from '../../model/packageableElements/interactive/V1_DSLInteractive_InteractiveService.js';

/**********
 * interactive configuration
 **********/

enum V1_InteractiveServiceType {
  READ = 'readInteractiveService',
  CREATE = 'createInteractiveService',
  UPDATE = 'updateInteractiveService',
  UPSERT = 'upsertInteractiveService',
  DELETE = 'deleteInteractiveService',
}

const V1_readInteractiveServiceSchema =
  (): ModelSchema<V1_InteractiveServiceRead> =>
    createModelSchema(V1_InteractiveServiceRead, {
      _type: usingConstantValueSchema(V1_InteractiveServiceType.READ),
      authorization: custom(
        (val) => V1_serializeInteractiveAuthorization(val),
        (val) => V1_deserializeInteractiveAuthorization(val),
      ),
      name: primitive(),
      query: custom(
        (val) => V1_serializeRawValueSpecification(val),
        (val) => V1_deserializeRawValueSpecification(val),
      ),
    });

const V1_createInteractiveServiceSchema =
  (): ModelSchema<V1_InteractiveServiceCreate> =>
    createModelSchema(V1_InteractiveServiceCreate, {
      _type: usingConstantValueSchema(V1_InteractiveServiceType.CREATE),
      authorization: custom(
        (val) => V1_serializeInteractiveAuthorization(val),
        (val) => V1_deserializeInteractiveAuthorization(val),
      ),
      name: primitive(),
    });

const V1_updateInteractiveServiceSchema =
  (): ModelSchema<V1_InteractiveServiceUpdate> =>
    createModelSchema(V1_InteractiveServiceUpdate, {
      _type: usingConstantValueSchema(V1_InteractiveServiceType.UPDATE),
      authorization: custom(
        (val) => V1_serializeInteractiveAuthorization(val),
        (val) => V1_deserializeInteractiveAuthorization(val),
      ),
      name: primitive(),
      query: custom(
        (val) => V1_serializeRawValueSpecification(val),
        (val) => V1_deserializeRawValueSpecification(val),
      ),
    });

const V1_upsertInteractiveServiceSchema =
  (): ModelSchema<V1_InteractiveServiceUpsert> =>
    createModelSchema(V1_InteractiveServiceUpsert, {
      _type: usingConstantValueSchema(V1_InteractiveServiceType.UPSERT),
      authorization: custom(
        (val) => V1_serializeInteractiveAuthorization(val),
        (val) => V1_deserializeInteractiveAuthorization(val),
      ),
      name: primitive(),
      query: custom(
        (val) => V1_serializeRawValueSpecification(val),
        (val) => V1_deserializeRawValueSpecification(val),
      ),
    });

const V1_deleteInteractiveServiceSchema =
  (): ModelSchema<V1_InteractiveServiceDelete> =>
    createModelSchema(V1_InteractiveServiceDelete, {
      _type: usingConstantValueSchema(V1_InteractiveServiceType.DELETE),
      authorization: custom(
        (val) => V1_serializeInteractiveAuthorization(val),
        (val) => V1_deserializeInteractiveAuthorization(val),
      ),
      name: primitive(),
      query: custom(
        (val) => V1_serializeRawValueSpecification(val),
        (val) => V1_deserializeRawValueSpecification(val),
      ),
    });

const V1_serializeInteractiveService = (
  protocol: V1_InteractiveService,
): PlainObject<V1_InteractiveService> => {
  if (protocol instanceof V1_InteractiveServiceRead) {
    return serialize(V1_readInteractiveServiceSchema(), protocol);
  } else if (protocol instanceof V1_InteractiveServiceCreate) {
    return serialize(V1_createInteractiveServiceSchema(), protocol);
  } else if (protocol instanceof V1_InteractiveServiceUpdate) {
    return serialize(V1_updateInteractiveServiceSchema(), protocol);
  } else if (protocol instanceof V1_InteractiveServiceUpsert) {
    return serialize(V1_upsertInteractiveServiceSchema(), protocol);
  } else if (protocol instanceof V1_InteractiveServiceDelete) {
    return serialize(V1_deleteInteractiveServiceSchema(), protocol);
  }
  throw new UnsupportedOperationError(`Can't serialize type service`, protocol);
};

const V1_deserializeInteractiveService = (
  json: PlainObject<V1_InteractiveService>,
): V1_InteractiveService => {
  switch (json._type) {
    case V1_InteractiveServiceType.READ:
      return deserialize(V1_readInteractiveServiceSchema(), json);
    case V1_InteractiveServiceType.CREATE:
      return deserialize(V1_createInteractiveServiceSchema(), json);
    default:
      throw new UnsupportedOperationError(
        `Can't deserialize type service '${json._type}'`,
      );
  }
};

/**********
 * interactive configuration
 **********/

enum V1_InteractiveTypeConfigurationType {
  PRIMARY_KEY = 'interactiveTypePrimaryKeysConfiguration',
  STRING_LENGTH = 'interactiveTypeStringPropertyConfiguration',
}

const V1_stringLengthInteractiveTypeConfigurationSchema =
  (): ModelSchema<V1_InteractiveTypeStringPropertyConfiguration> =>
    createModelSchema(V1_InteractiveTypeStringPropertyConfiguration, {
      _type: usingConstantValueSchema(
        V1_InteractiveTypeConfigurationType.STRING_LENGTH,
      ),
      property: primitive(),
      minLength: primitive(),
      maxLength: primitive(),
    });

const V1_primaryKeysInteractiveTypeConfigurationSchema =
  (): ModelSchema<V1_InteractiveTypePrimaryKeysConfiguration> =>
    createModelSchema(V1_InteractiveTypePrimaryKeysConfiguration, {
      _type: usingConstantValueSchema(
        V1_InteractiveTypeConfigurationType.PRIMARY_KEY,
      ),
      primaryKeys: custom(
        (val) =>
          serializeArray(
            val,
            (v: V1_InteractiveTypePrimaryKeysPrimaryKeyConfiguration) =>
              serialize(
                V1_primaryKeysPrimaryKeyInteractiveTypeConfigurationSchema(),
                v,
              ),
            {
              skipIfEmpty: true,
              INTERNAL__forceReturnEmptyInTest: true,
            },
          ),
        (val) =>
          deserializeArray(
            val,
            (v) =>
              deserialize(
                V1_primaryKeysPrimaryKeyInteractiveTypeConfigurationSchema(),
                v,
              ),
            {
              skipIfEmpty: false,
            },
          ),
      ),
    });

const V1_primaryKeysPrimaryKeyInteractiveTypeConfigurationSchema =
  (): ModelSchema<V1_InteractiveTypePrimaryKeysPrimaryKeyConfiguration> =>
    createModelSchema(V1_InteractiveTypePrimaryKeysPrimaryKeyConfiguration, {
      property: primitive(),
      strategy: primitive(),
    });

const V1_serializeInteractiveTypeConfiguration = (
  protocol: V1_InteractiveTypeConfiguration,
): PlainObject<V1_InteractiveTypeConfiguration> => {
  if (protocol instanceof V1_InteractiveTypePrimaryKeysConfiguration) {
    return serialize(
      V1_primaryKeysInteractiveTypeConfigurationSchema(),
      protocol,
    );
  } else if (
    protocol instanceof V1_InteractiveTypeStringPropertyConfiguration
  ) {
    return serialize(
      V1_stringLengthInteractiveTypeConfigurationSchema(),
      protocol,
    );
  }
  throw new UnsupportedOperationError(
    `Can't serialize type configuration`,
    protocol,
  );
};

const V1_deserializeInteractiveTypeConfiguration = (
  json: PlainObject<V1_InteractiveTypeConfiguration>,
): V1_InteractiveTypeConfiguration => {
  console.log(json);
  switch (json._type) {
    case V1_InteractiveTypeConfigurationType.PRIMARY_KEY:
      return deserialize(
        V1_primaryKeysInteractiveTypeConfigurationSchema(),
        json,
      );
    case V1_InteractiveTypeConfigurationType.STRING_LENGTH:
      return deserialize(
        V1_stringLengthInteractiveTypeConfigurationSchema(),
        json,
      );
    default:
      throw new UnsupportedOperationError(
        `Can't deserialize type configuration '${json._type}'`,
      );
  }
};

/**********
 * interactive type
 **********/

const V1_interactiveTypeSchema = (): ModelSchema<V1_InteractiveType> =>
  createModelSchema(V1_InteractiveType, {
    baseClass: primitive(),
    // graphScope: custom(
    //   (val) => V1_serializeRawValueSpecification(val),
    //   (val) => V1_deserializeRawValueSpecification(val),
    // ),
    configuration: custom(
      (val) =>
        serializeArray(
          val,
          (v: V1_InteractiveTypeConfiguration) =>
            V1_serializeInteractiveTypeConfiguration(v),
          {
            skipIfEmpty: true,
            INTERNAL__forceReturnEmptyInTest: true,
          },
        ),
      (val) =>
        deserializeArray(
          val,
          (v) => V1_deserializeInteractiveTypeConfiguration(v),
          {
            skipIfEmpty: false,
          },
        ),
    ),
    services: custom(
      (val) =>
        serializeArray(
          val,
          (v: V1_InteractiveService) => V1_serializeInteractiveService(v),
          {
            skipIfEmpty: true,
            INTERNAL__forceReturnEmptyInTest: true,
          },
        ),
      (val) =>
        deserializeArray(val, (v) => V1_deserializeInteractiveService(v), {
          skipIfEmpty: false,
        }),
    ),
  });

const V1_serializeInteractiveType = (
  protocol: V1_InteractiveType,
): PlainObject<V1_InteractiveType> => {
  return serialize(V1_interactiveTypeSchema(), protocol);
};

const V1_deserializeInteractiveType = (
  json: PlainObject<V1_InteractiveType>,
): V1_InteractiveType => {
  return deserialize(V1_interactiveTypeSchema(), json);
};

/**********
 * interactive authorization
 **********/

enum V1_InteractiveAuthorizationType {
  DEFAULT = 'defaultInteractiveAuthorization',
}

const V1_defaultInteractiveAuthorizationSchema =
  (): ModelSchema<V1_DefaultInteractiveAuthorization> =>
    createModelSchema(V1_DefaultInteractiveAuthorization, {
      _type: usingConstantValueSchema(V1_InteractiveAuthorizationType.DEFAULT),
      authorizationFunction: custom(
        (val) => V1_serializeRawValueSpecification(val),
        (val) => V1_deserializeRawValueSpecification(val),
      ),
    });

const V1_serializeInteractiveAuthorization = (
  protocol: V1_InteractiveAuthorization,
): PlainObject<V1_InteractiveAuthorization> => {
  if (protocol instanceof V1_DefaultInteractiveAuthorization) {
    return serialize(V1_defaultInteractiveAuthorizationSchema(), protocol);
  }
  throw new UnsupportedOperationError(
    `Can't serialize authorization`,
    protocol,
  );
};

const V1_deserializeInteractiveAuthorization = (
  json: PlainObject<V1_InteractiveAuthorization>,
): V1_InteractiveAuthorization => {
  switch (json._type) {
    case V1_InteractiveAuthorizationType.DEFAULT:
      return deserialize(V1_defaultInteractiveAuthorizationSchema(), json);
    default:
      throw new UnsupportedOperationError(
        `Can't deserialize authorization '${json._type}'`,
      );
  }
};

/**********
 * interactive store
 **********/

enum V1_InteractiveStoreType {
  RELATIONAL = 'relationalInteractiveApplicationStore',
}

const V1_relationalInteractiveStoreSchema =
  (): ModelSchema<V1_InteractiveApplicationStoreRelational> =>
    createModelSchema(V1_InteractiveApplicationStoreRelational, {
      _type: usingConstantValueSchema(V1_InteractiveStoreType.RELATIONAL),
      connection: custom(
        (val) => V1_serializeRawValueSpecification(val),
        (val) => V1_deserializeRawValueSpecification(val),
      ),
      type: primitive(),
    });

const V1_serializeInteractiveStore = (
  protocol: V1_InteractiveApplicationStore,
): PlainObject<V1_InteractiveApplicationStore> => {
  if (protocol instanceof V1_InteractiveApplicationStoreRelational) {
    return serialize(V1_relationalInteractiveStoreSchema(), protocol);
  }
  throw new UnsupportedOperationError(`Can't serialize store`, protocol);
};

const V1_deserializeInteractiveStore = (
  json: PlainObject<V1_InteractiveApplicationStore>,
): V1_InteractiveApplicationStore => {
  switch (json._type) {
    case V1_InteractiveStoreType.RELATIONAL:
      return deserialize(V1_relationalInteractiveStoreSchema(), json);
    default:
      throw new UnsupportedOperationError(
        `Can't deserialize store '${json._type}'`,
      );
  }
};

/**********
 * interactive application
 **********/

export const V1_INTERACTIVE_APPLICATION_ELEMENT_PROTOCOL_TYPE =
  'interactiveApplication';

export const V1_interactiveApplicationModelSchema = (
  plugins: PureProtocolProcessorPlugin[],
): ModelSchema<V1_InteractiveApplication> =>
  createModelSchema(V1_InteractiveApplication, {
    _type: usingConstantValueSchema(
      V1_INTERACTIVE_APPLICATION_ELEMENT_PROTOCOL_TYPE,
    ),
    name: primitive(),
    package: primitive(),
    documentation: primitive(),
    store: custom(
      (val) => V1_serializeInteractiveStore(val),
      (val) => V1_deserializeInteractiveStore(val),
    ),
    globalAuthorization: custom(
      (val) => V1_serializeInteractiveAuthorization(val),
      (val) => V1_deserializeInteractiveAuthorization(val),
    ),
    types: custom(
      (val) =>
        serializeArray(
          val,
          (v: V1_InteractiveType) => V1_serializeInteractiveType(v),
          {
            skipIfEmpty: true,
            INTERNAL__forceReturnEmptyInTest: true,
          },
        ),
      (val) =>
        deserializeArray(val, (v) => V1_deserializeInteractiveType(v), {
          skipIfEmpty: false,
        }),
    ),
  });
