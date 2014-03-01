OYM.User = Model.extend({
    image : attr(''),
    firstName : attr(''),
    lastName : attr(''),
    fullName : function () {
        var first = this.get('firstName'),
            last = this.get('lastName'),
            maxLength = 15;

        if (first.length > maxLength - 3) {
            return first.substr(0, maxLength);
        }
        if (first.length + last.length + 1 > maxLength) {
            return first + ' ' + last.substr(0, 1) + '.';
        }
        return first + ' ' + last;

    }.property('firstName', 'lastName').readOnly(),

    documents : hasMany('document', {inverse : 'owner'})
});