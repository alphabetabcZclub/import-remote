import remote from './remote';
import RemoteModule from './module';
import createRequireFactory from './requireFactory';
import { innumerable, mergeObject } from './utils';
import importJs from './importJs';
import importJson from './importJson';
import importCss from './importCss';
import jsonp from './jsonp';
import { satisfy, versionLt } from './semver';

// eslint-disable-next-line no-undef
const version = typeof __packageversion__ === 'undefined' ? undefined : __packageversion__;

export {
  RemoteModule,
  createRequireFactory,
  importJs,
  importJson,
  importCss,
  jsonp,
  mergeObject,
  innumerable,
  satisfy,
  versionLt,
  version
};

const remoteExternal = {
  RemoteModule,
  createRequireFactory,
  importJs,
  importJson,
  importCss,
  jsonp,
  mergeObject,
  innumerable,
  satisfy,
  versionLt,
  version,
  
  default: remote,
};

remote.use = function (plugin) {
  plugin && plugin.install(remote);
};

remote.externals['import-remote'] = remoteExternal;

innumerable(remote.externals['import-remote'], '__esModule', true);

export default remote;
