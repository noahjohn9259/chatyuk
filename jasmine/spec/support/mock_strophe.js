var StropheMuc = function() {
  this.room = null;
  this.nick = null;
  this.onMessageCb = null;
  this.onPresenceCb = null;
  this.onRosterCb = null;
};

StropheMuc.prototype = {

  join: function(room, nick, onMessageCb, onPresenceCb, onRosterCb) {
    this.room = room;
    this.nick = nick;
    this.onMessageCb = onMessageCb;
    this.onPresenceCb = onPresenceCb;
    this.onRosterCb = onRosterCb;
  }
}

var Strophe = { boshService: null };

Strophe.Status = {
        ERROR: 0,
        CONNECTING: 1,
        CONNFAIL: 2,
        AUTHENTICATING: 3,
        AUTHFAIL: 4,
        CONNECTED: 5,
        DISCONNECTED: 6,
        DISCONNECTING: 7,
        ATTACHED: 8
};


Strophe.Connection = function( boshService ) { 
  this.boshService = boshService;
  this.muc = new StropheMuc();
};

Strophe.Connection.prototype = {

  connect: function (jid, password, onConnectCb) { 
             this.jid = jid;
             this.password = password;
             this.onConnectCb = onConnectCb;
             //Based on https://github.com/jcbrand/converse.js/blob/master/converse.js#L565
             this._proto = {};
             this._proto.sid = 'fakesid-123123';
             this._proto.rid = 999;
             return true
           },

  attach: function(jid, sid, rid, onConnectCb) {


  },

  reset: function() {}

}

module.exports = Strophe;
