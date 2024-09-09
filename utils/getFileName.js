const { stripExt } = require('./utils.js');

async function getFileName(file, data) {
      // Extract the file name without extension
      const fileNameWithoutExt = stripExt(file);
      
      // Validate if the file name matches any of the target.RECORD_TYPE values
      const recordTypes = Object.keys(data.target);
      if (!recordTypes.includes(fileNameWithoutExt.toUpperCase())) {
        core.setOutput('infoMessage', `File name ${fileNameWithoutExt} does not match any target.RECORD_TYPE`);
        return false;
      } else {
        return true;
      }
}

module.exports = getFileName;