# Rasa X JS

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Generating API Client 

First, install the [OpenAPI Generator](https://openapi-generator.tech/) tool:

```
npm install @openapitools/openapi-generator-cli -g
```

Then download the [Rasa X OpenAPI YAML file](https://rasa.com/docs/rasa-x/_static/spec/rasa-x.yml) and run the `generate` command:

```
openapi-generator generate -i rasa-x.yml -g javascript -o rasa-x-js --skip-validate-spec
```

Currently the `--skip-validate-spec` option is required, or the OpenAPI Generator tool will raise a `SpecValidationException` error. 

A new update to the API client should be created whenever the Rasa X OpenAPI specification changes. 


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install rasa_x_http_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your rasa_x_http_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var RasaXHttpApi = require('rasa_x_http_api');

var defaultClient = RasaXHttpApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new RasaXHttpApi.AnalyicsApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getConversationStatistics(callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RasaXHttpApi.AnalyicsApi* | [**getConversationStatistics**](docs/AnalyicsApi.md#getConversationStatistics) | **GET** /statistics | Fetch conversation statistics
*RasaXHttpApi.AnalyticsApi* | [**userAnalytics**](docs/AnalyticsApi.md#userAnalytics) | **GET** /analytics | Fetch analytics
*RasaXHttpApi.AuthenticationApi* | [**issueJWT**](docs/AuthenticationApi.md#issueJWT) | **POST** /auth/jwt | issue signed JWT
*RasaXHttpApi.AuthenticationApi* | [**login**](docs/AuthenticationApi.md#login) | **POST** /auth | Perform authentication
*RasaXHttpApi.ChatTokenApi* | [**getChatToken**](docs/ChatTokenApi.md#getChatToken) | **GET** /chatToken | Get chat_token, bot_name and description
*RasaXHttpApi.ChatTokenApi* | [**updateChatToken**](docs/ChatTokenApi.md#updateChatToken) | **PUT** /chatToken | Update a bot&#39;s name and description for token
*RasaXHttpApi.ConversationsApi* | [**correctMessage**](docs/ConversationsApi.md#correctMessage) | **PUT** /conversations/{conversation_id}/messages/{message_timestamp}/intent | Correct message intent
*RasaXHttpApi.ConversationsApi* | [**deleteFlagFromConversation**](docs/ConversationsApi.md#deleteFlagFromConversation) | **DELETE** /conversations/{conversation_id}/messages/{message_timestamp}/flag | Removes a flag from a message
*RasaXHttpApi.ConversationsApi* | [**downloadDebugDumpJson**](docs/ConversationsApi.md#downloadDebugDumpJson) | **GET** /conversations/{conversation_id}/debug-dump.json | Download debug dump in JSON format
*RasaXHttpApi.ConversationsApi* | [**downloadDebugDumpMarkdown**](docs/ConversationsApi.md#downloadDebugDumpMarkdown) | **GET** /conversations/{conversation_id}/debug-dump.md | Download debug dump in Markdown format
*RasaXHttpApi.ConversationsApi* | [**flagMessage**](docs/ConversationsApi.md#flagMessage) | **PUT** /conversations/{conversation_id}/messages/{message_timestamp}/flag | Flags this message
*RasaXHttpApi.ConversationsApi* | [**getConversation**](docs/ConversationsApi.md#getConversation) | **GET** /conversations/{conversation_id} | Fetch tracker for a conversation id
*RasaXHttpApi.ConversationsApi* | [**getConversations**](docs/ConversationsApi.md#getConversations) | **GET** /conversations | Fetch list of conversations
*RasaXHttpApi.ConversationsApi* | [**getEvents**](docs/ConversationsApi.md#getEvents) | **GET** /conversations/{conversation_id}/events | Fetch events in conversation with conversation
*RasaXHttpApi.ConversationsApi* | [**getMessages**](docs/ConversationsApi.md#getMessages) | **GET** /conversations/{conversation_id}/messages | Fetch messages in conversation
*RasaXHttpApi.ConversationsApi* | [**getUniqueActions**](docs/ConversationsApi.md#getUniqueActions) | **GET** /conversationActions | Fetch a list of unique actions from all conversations
*RasaXHttpApi.ConversationsApi* | [**getUniqueEntities**](docs/ConversationsApi.md#getUniqueEntities) | **GET** /conversationEntities | Fetch a list of unique entities from all conversations
*RasaXHttpApi.ConversationsApi* | [**getUniqueIntents**](docs/ConversationsApi.md#getUniqueIntents) | **GET** /conversationIntents | Fetch a list of unique intents from all conversations
*RasaXHttpApi.ConversationsApi* | [**getUniquePolicies**](docs/ConversationsApi.md#getUniquePolicies) | **GET** /conversationPolicies | Fetch a list of unique Rasa Core policies in all conversations
*RasaXHttpApi.ConversationsApi* | [**putChat**](docs/ConversationsApi.md#putChat) | **POST** /chat | Endpoint to have a conversation with the assistant
*RasaXHttpApi.ConversationsApi* | [**removeMessageCorrection**](docs/ConversationsApi.md#removeMessageCorrection) | **DELETE** /conversations/{conversation_id}/messages/{message_timestamp}/intent | Undoes the correction of message
*RasaXHttpApi.ConversationsApi* | [**sendMessage**](docs/ConversationsApi.md#sendMessage) | **POST** /conversations/{conversation_id}/messages | Post a message to a conversation
*RasaXHttpApi.DomainApi* | [**createAction**](docs/DomainApi.md#createAction) | **POST** /projects/{project_id}/actions | Create new action
*RasaXHttpApi.DomainApi* | [**deleteAction**](docs/DomainApi.md#deleteAction) | **DELETE** /projects/{project_id}/actions/{action_id} | Delete action
*RasaXHttpApi.DomainApi* | [**getDomain**](docs/DomainApi.md#getDomain) | **GET** /domain | Retrieve Rasa domain
*RasaXHttpApi.DomainApi* | [**getDomainActions**](docs/DomainApi.md#getDomainActions) | **GET** /projects/{project_id}/actions | Retrieve Rasa domain actions
*RasaXHttpApi.DomainApi* | [**getDomainWarnings**](docs/DomainApi.md#getDomainWarnings) | **GET** /domainWarnings | Retrieve Rasa domain warnings
*RasaXHttpApi.DomainApi* | [**updateAction**](docs/DomainApi.md#updateAction) | **PUT** /projects/{project_id}/actions/{action_id} | Update action
*RasaXHttpApi.DomainApi* | [**updateDomain**](docs/DomainApi.md#updateDomain) | **PUT** /domain | Update Rasa domain
*RasaXHttpApi.EnvironmentsApi* | [**getEnvironmentsConfig**](docs/EnvironmentsApi.md#getEnvironmentsConfig) | **GET** /environments | Retrieve Platform deployment environment metadata
*RasaXHttpApi.EnvironmentsApi* | [**saveEnvironmentsConfig**](docs/EnvironmentsApi.md#saveEnvironmentsConfig) | **PUT** /environments | Save Platform deployment environment config
*RasaXHttpApi.EvaluationApi* | [**predictNextAction**](docs/EvaluationApi.md#predictNextAction) | **POST** /conversations/{conversation_id}/predict | Predicts the next action in the conversation.
*RasaXHttpApi.FeatureFlagsApi* | [**getFeatureFlags**](docs/FeatureFlagsApi.md#getFeatureFlags) | **GET** /features | Retrieve all features flags
*RasaXHttpApi.FeatureFlagsApi* | [**updateFeatureFlag**](docs/FeatureFlagsApi.md#updateFeatureFlag) | **POST** /features | Update or create a feature flag
*RasaXHttpApi.IntentsApi* | [**getIntents**](docs/IntentsApi.md#getIntents) | **GET** /projects/{project_id}/intents | List intents
*RasaXHttpApi.LogsApi* | [**archiveLog**](docs/LogsApi.md#archiveLog) | **DELETE** /projects/{project_id}/logs/{log_id} | Archive log
*RasaXHttpApi.LogsApi* | [**getLogByHash**](docs/LogsApi.md#getLogByHash) | **GET** /projects/{project_id}/logs/{hash} | Fetch log by its hash
*RasaXHttpApi.LogsApi* | [**getLogs**](docs/LogsApi.md#getLogs) | **GET** /logs | Get the logs of the Rasa X service
*RasaXHttpApi.MessagesApi* | [**createEvent**](docs/MessagesApi.md#createEvent) | **POST** /conversations/{conversation_id}/events | Create a new event in the tracker of a conversation
*RasaXHttpApi.MessagesApi* | [**getSuggestions**](docs/MessagesApi.md#getSuggestions) | **GET** /projects/{project_id}/logs | Get suggestions
*RasaXHttpApi.MessagesApi* | [**parseText**](docs/MessagesApi.md#parseText) | **POST** /projects/{project_id}/logs | Parse text and create a new log entry
*RasaXHttpApi.MessagesApi* | [**runAction**](docs/MessagesApi.md#runAction) | **POST** /conversations/{conversation_id}/execute | Run an action in a conversation.
*RasaXHttpApi.MessagesApi* | [**updateEvent**](docs/MessagesApi.md#updateEvent) | **PUT** /conversations/{conversation_id}/events | Update events in the tracker of a conversation
*RasaXHttpApi.ModelsApi* | [**getModels**](docs/ModelsApi.md#getModels) | **GET** /projects/{project_id}/models | Get a list of Rasa models
*RasaXHttpApi.ModelsApi* | [**projectsProjectIdModelsModelDelete**](docs/ModelsApi.md#projectsProjectIdModelsModelDelete) | **DELETE** /projects/{project_id}/models/{model} | Delete a Rasa Core model
*RasaXHttpApi.ModelsApi* | [**projectsProjectIdModelsModelTagsTagDelete**](docs/ModelsApi.md#projectsProjectIdModelsModelTagsTagDelete) | **DELETE** /projects/{project_id}/models/{model}/tags/{tag} | Delete a tag of a Rasa model
*RasaXHttpApi.ModelsApi* | [**projectsProjectIdModelsModelTagsTagPut**](docs/ModelsApi.md#projectsProjectIdModelsModelTagsTagPut) | **PUT** /projects/{project_id}/models/{model}/tags/{tag} | Tag a Rasa model
*RasaXHttpApi.ModelsApi* | [**projectsProjectIdModelsPost**](docs/ModelsApi.md#projectsProjectIdModelsPost) | **POST** /projects/{project_id}/models | Upload a zipped Rasa model
*RasaXHttpApi.ModelsApi* | [**projectsProjectIdModelsTagsTagGet**](docs/ModelsApi.md#projectsProjectIdModelsTagsTagGet) | **GET** /projects/{project_id}/models/tags/{tag} | Get a Rasa Core model with tag
*RasaXHttpApi.NLUDataApi* | [**addData**](docs/NLUDataApi.md#addData) | **POST** /projects/{project_id}/data | Add new training example
*RasaXHttpApi.NLUDataApi* | [**deleteData**](docs/NLUDataApi.md#deleteData) | **DELETE** /projects/{project_id}/data/{example_id} | Delete a training example by id
*RasaXHttpApi.NLUDataApi* | [**getData**](docs/NLUDataApi.md#getData) | **GET** /projects/{project_id}/data | Get training examples
*RasaXHttpApi.NLUDataApi* | [**getDataJson**](docs/NLUDataApi.md#getDataJson) | **GET** /projects/{project_id}/data.json | Download traning examples in JSON format
*RasaXHttpApi.NLUDataApi* | [**getDataWarnings**](docs/NLUDataApi.md#getDataWarnings) | **GET** /projects/{project_id}/dataWarnings | Get warnings about training data.
*RasaXHttpApi.NLUDataApi* | [**getEntities**](docs/NLUDataApi.md#getEntities) | **GET** /projects/{project_id}/entities | Available entities
*RasaXHttpApi.NLUDataApi* | [**replaceBulkData**](docs/NLUDataApi.md#replaceBulkData) | **PUT** /projects/{project_id}/data | Replace training data in bulk
*RasaXHttpApi.NLUDataApi* | [**updateExample**](docs/NLUDataApi.md#updateExample) | **PUT** /projects/{project_id}/data/{example_id} | Update a training example by id
*RasaXHttpApi.NLUDataApi* | [**updateExampleById**](docs/NLUDataApi.md#updateExampleById) | **PUT** /projects/{project_id}/data/{hash} | Update a training example by id
*RasaXHttpApi.ProjectApi* | [**postProject**](docs/ProjectApi.md#postProject) | **POST** /projects/{project_id} | Create a project
*RasaXHttpApi.RolesApi* | [**createRole**](docs/RolesApi.md#createRole) | **POST** /roles | Create new role
*RasaXHttpApi.RolesApi* | [**deleteRole**](docs/RolesApi.md#deleteRole) | **DELETE** /roles/{role} | Delete role
*RasaXHttpApi.RolesApi* | [**deleteUserRole**](docs/RolesApi.md#deleteUserRole) | **DELETE** /users/{username}/roles/{role} | Delete user role
*RasaXHttpApi.RolesApi* | [**getRole**](docs/RolesApi.md#getRole) | **GET** /roles/{role} | Return role
*RasaXHttpApi.RolesApi* | [**getUserRoles**](docs/RolesApi.md#getUserRoles) | **GET** /users/{username}/roles | Get user roles
*RasaXHttpApi.RolesApi* | [**listRoleUsers**](docs/RolesApi.md#listRoleUsers) | **GET** /roles/{role}/users | Get list of users for specified role
*RasaXHttpApi.RolesApi* | [**listRoles**](docs/RolesApi.md#listRoles) | **GET** /roles | List user roles
*RasaXHttpApi.RolesApi* | [**updateRole**](docs/RolesApi.md#updateRole) | **PUT** /roles/{role} | Update role
*RasaXHttpApi.RolesApi* | [**updateRoleUsers**](docs/RolesApi.md#updateRoleUsers) | **PUT** /roles/{role}/users | Update users associated with {role}
*RasaXHttpApi.RolesApi* | [**updateUserRoles**](docs/RolesApi.md#updateUserRoles) | **PUT** /users/{username}/roles | Update user roles
*RasaXHttpApi.SettingsApi* | [**getConfig**](docs/SettingsApi.md#getConfig) | **GET** /projects/{project_id}/settings | Fetch NLU config
*RasaXHttpApi.SettingsApi* | [**saveConfig**](docs/SettingsApi.md#saveConfig) | **PUT** /projects/{project_id}/settings | Save NLU config
*RasaXHttpApi.StatusApi* | [**status**](docs/StatusApi.md#status) | **GET** /health | Fetch status of Rasa services
*RasaXHttpApi.StatusApi* | [**versions**](docs/StatusApi.md#versions) | **GET** /version | Fetch versions of services
*RasaXHttpApi.StoriesApi* | [**deleteStory**](docs/StoriesApi.md#deleteStory) | **DELETE** /stories/{story_id} | Delete a Rasa Core Story
*RasaXHttpApi.StoriesApi* | [**getStories**](docs/StoriesApi.md#getStories) | **GET** /stories | Get saved stories
*RasaXHttpApi.StoriesApi* | [**getStoriesAsMarkdown**](docs/StoriesApi.md#getStoriesAsMarkdown) | **GET** /stories.md | Get stories as markdown file
*RasaXHttpApi.StoriesApi* | [**modifyStory**](docs/StoriesApi.md#modifyStory) | **PUT** /stories/{story_id} | Modify Rasa Core story
*RasaXHttpApi.StoriesApi* | [**replaceStories**](docs/StoriesApi.md#replaceStories) | **PUT** /stories | Replace stories
*RasaXHttpApi.StoriesApi* | [**uploadStories**](docs/StoriesApi.md#uploadStories) | **POST** /stories | Upload stories
*RasaXHttpApi.TemplateApi* | [**deleteTemplate**](docs/TemplateApi.md#deleteTemplate) | **DELETE** /templates/{template_id} | Delete a response template
*RasaXHttpApi.TemplatesApi* | [**getTemplates**](docs/TemplatesApi.md#getTemplates) | **GET** /templates | Get bot response templates
*RasaXHttpApi.TemplatesApi* | [**modifyTemplate**](docs/TemplatesApi.md#modifyTemplate) | **PUT** /templates/{template_id} | Modify response template
*RasaXHttpApi.TemplatesApi* | [**postTemplate**](docs/TemplatesApi.md#postTemplate) | **POST** /templates | Add to templates collection
*RasaXHttpApi.UserApi* | [**changePassword**](docs/UserApi.md#changePassword) | **POST** /user/password | Change password
*RasaXHttpApi.UserApi* | [**deleteUser**](docs/UserApi.md#deleteUser) | **DELETE** /users/{username} | Delete a user
*RasaXHttpApi.UserApi* | [**updateUsername**](docs/UserApi.md#updateUsername) | **PATCH** /user | Update username
*RasaXHttpApi.UsersApi* | [**createUser**](docs/UsersApi.md#createUser) | **POST** /users | Create a new user
*RasaXHttpApi.UsersApi* | [**getUserMe**](docs/UsersApi.md#getUserMe) | **GET** /user | Get information about this user
*RasaXHttpApi.UsersApi* | [**getUsers**](docs/UsersApi.md#getUsers) | **GET** /users | List all users


## Documentation for Models

 - [RasaXHttpApi.Action](docs/Action.md)
 - [RasaXHttpApi.ActionEvent](docs/ActionEvent.md)
 - [RasaXHttpApi.AnalyticsResult](docs/AnalyticsResult.md)
 - [RasaXHttpApi.BotEvent](docs/BotEvent.md)
 - [RasaXHttpApi.BotMessage](docs/BotMessage.md)
 - [RasaXHttpApi.BotMessageAttachement](docs/BotMessageAttachement.md)
 - [RasaXHttpApi.BotMessageButtons](docs/BotMessageButtons.md)
 - [RasaXHttpApi.ChatToken](docs/ChatToken.md)
 - [RasaXHttpApi.Conversation](docs/Conversation.md)
 - [RasaXHttpApi.ConversationMetadata](docs/ConversationMetadata.md)
 - [RasaXHttpApi.ConversationStatistics](docs/ConversationStatistics.md)
 - [RasaXHttpApi.ConversationStatisticsTopIntents](docs/ConversationStatisticsTopIntents.md)
 - [RasaXHttpApi.DataWarning](docs/DataWarning.md)
 - [RasaXHttpApi.DomainWarnings](docs/DomainWarnings.md)
 - [RasaXHttpApi.Entity](docs/Entity.md)
 - [RasaXHttpApi.Event](docs/Event.md)
 - [RasaXHttpApi.FeatureFlag](docs/FeatureFlag.md)
 - [RasaXHttpApi.InlineObject](docs/InlineObject.md)
 - [RasaXHttpApi.InlineObject1](docs/InlineObject1.md)
 - [RasaXHttpApi.InlineObject10](docs/InlineObject10.md)
 - [RasaXHttpApi.InlineObject2](docs/InlineObject2.md)
 - [RasaXHttpApi.InlineObject3](docs/InlineObject3.md)
 - [RasaXHttpApi.InlineObject4](docs/InlineObject4.md)
 - [RasaXHttpApi.InlineObject5](docs/InlineObject5.md)
 - [RasaXHttpApi.InlineObject6](docs/InlineObject6.md)
 - [RasaXHttpApi.InlineObject7](docs/InlineObject7.md)
 - [RasaXHttpApi.InlineObject8](docs/InlineObject8.md)
 - [RasaXHttpApi.InlineObject9](docs/InlineObject9.md)
 - [RasaXHttpApi.InlineResponse200](docs/InlineResponse200.md)
 - [RasaXHttpApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [RasaXHttpApi.InlineResponse20010](docs/InlineResponse20010.md)
 - [RasaXHttpApi.InlineResponse2001Stack](docs/InlineResponse2001Stack.md)
 - [RasaXHttpApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [RasaXHttpApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [RasaXHttpApi.InlineResponse2004](docs/InlineResponse2004.md)
 - [RasaXHttpApi.InlineResponse2005](docs/InlineResponse2005.md)
 - [RasaXHttpApi.InlineResponse2006](docs/InlineResponse2006.md)
 - [RasaXHttpApi.InlineResponse2007](docs/InlineResponse2007.md)
 - [RasaXHttpApi.InlineResponse2008](docs/InlineResponse2008.md)
 - [RasaXHttpApi.InlineResponse2009](docs/InlineResponse2009.md)
 - [RasaXHttpApi.InlineResponse200Production](docs/InlineResponse200Production.md)
 - [RasaXHttpApi.InlineResponse401](docs/InlineResponse401.md)
 - [RasaXHttpApi.InlineResponse404](docs/InlineResponse404.md)
 - [RasaXHttpApi.Intent](docs/Intent.md)
 - [RasaXHttpApi.IntentInformation](docs/IntentInformation.md)
 - [RasaXHttpApi.Message](docs/Message.md)
 - [RasaXHttpApi.MessageWithPrediction](docs/MessageWithPrediction.md)
 - [RasaXHttpApi.MessageWithPredictionUserInput](docs/MessageWithPredictionUserInput.md)
 - [RasaXHttpApi.MessageWithPredictionUserInputIntent](docs/MessageWithPredictionUserInputIntent.md)
 - [RasaXHttpApi.MismatchWarning](docs/MismatchWarning.md)
 - [RasaXHttpApi.Model](docs/Model.md)
 - [RasaXHttpApi.NlgRequest](docs/NlgRequest.md)
 - [RasaXHttpApi.NlgResponse](docs/NlgResponse.md)
 - [RasaXHttpApi.ParseData](docs/ParseData.md)
 - [RasaXHttpApi.PredictResult](docs/PredictResult.md)
 - [RasaXHttpApi.PredictResultScores](docs/PredictResultScores.md)
 - [RasaXHttpApi.Project](docs/Project.md)
 - [RasaXHttpApi.ProjectsProjectIdDataRasaNluData](docs/ProjectsProjectIdDataRasaNluData.md)
 - [RasaXHttpApi.RasaCoreStoryObject](docs/RasaCoreStoryObject.md)
 - [RasaXHttpApi.RasaCoreStoryObjectAnnotation](docs/RasaCoreStoryObjectAnnotation.md)
 - [RasaXHttpApi.RestartEvent](docs/RestartEvent.md)
 - [RasaXHttpApi.Role](docs/Role.md)
 - [RasaXHttpApi.RoleGrants](docs/RoleGrants.md)
 - [RasaXHttpApi.RolesRoleGrants](docs/RolesRoleGrants.md)
 - [RasaXHttpApi.Suggestion](docs/Suggestion.md)
 - [RasaXHttpApi.TemplateResponse](docs/TemplateResponse.md)
 - [RasaXHttpApi.TrainingExample](docs/TrainingExample.md)
 - [RasaXHttpApi.TrainingExampleEntities](docs/TrainingExampleEntities.md)
 - [RasaXHttpApi.User](docs/User.md)
 - [RasaXHttpApi.UserEvent](docs/UserEvent.md)
 - [RasaXHttpApi.UserProjects](docs/UserProjects.md)


## Documentation for Authorization



### bearerAuth

- **Type**: Bearer authentication (JWT)

