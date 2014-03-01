OYM.Document = Model.extend({
    title : attr(''),
    content : attr(''),
    preview : function () {
        var content = this.get('content'),
            length = content.length;

        return (length > 140) ? content.substr(0, 137) + '...' : content;

    }.property('content').readOnly(),

    owner : belongsTo('user'),
    authors : hasMany('user')
});