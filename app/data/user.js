function user()
{
    var user = {};
    user.name = 'Alexandr Murashkin';
    user.photoUrl = 'img/core/alexandr_murashkin.png';
    user.linkedInUrl = 'http://www.linkedin.com/pub/alexander-murashkin/59/262/527';
    user.labUrl = 'http://gsd.uwaterloo.ca/amurashk';
    user.degree = [];
    user.degree[0] = {
      'title': 'MMath in Computer Science, University of Waterloo, ON, Canada (expected Aug 2014)',
      'icon': 'img/core/ca.png'
    };
    user.degree[1] = {
      'title': 'BSc in Computer Systems and Software Engineering, Kazakh-British Technical University, Kazakhstan (2012)',
      'icon': 'img/core/kz.png'
    };

    user.status = 'Graduate Research Assistant, writing a Master\'s thesis';
    user.phone = '+1 (226) 600 5529';
    user.email = 'amurashk@gsd.uwaterloo.ca';
    user.cv = 'binary/core/alexandr_murashkin.pdf';

    return user;
}