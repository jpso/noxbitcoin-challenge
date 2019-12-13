'use strict'

module.exports = {
  isFilledOrder: (json) => {
    const message = JSON.parse(json);
    if (message.table != 'order')
      return false;
    else {
      const messageData = message.data;
      if (message.action != 'partial' && messageData[0].ordStatus == 'Filled')
        return true;
      else
        return false;
    }
  }
}
