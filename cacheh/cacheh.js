/** 
 This Code is published under the terms and conditions of the CC-BY-NC-ND-4.0
 (https://creativecommons.org/licenses/by-nc-nd/4.0)
 
 Please contribute to the current project.
 
 SPDX-License-Identifier: CC-BY-NC-ND-4.0
 @author: pdulvp@laposte.net
*/
const fsh = require('@pdulvp/fsh');
const httph = require('@pdulvp/httph');

var cacheh = {
  
    fetchFile: function (host, url, cache) {
        if (!fsh.fileExists(cache)) {
            return httph.downloadFile(host, url, cache);
        }
        return Promise.resolve(cache);
    }
}

module.exports = cacheh;
