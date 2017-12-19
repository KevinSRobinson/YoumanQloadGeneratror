require('./Client/app.base.js');
require('./Client/app.config.js');


require('./Client/routes');


require('./Client/Features/Home/Components/Main/main');
require('./client/Features/Home/Components/Navigation/mainLayout.js');

require('./Client/Features/Home/routes.js');



<% for (var key in data.data) {  
 
    
    var keyName = data.data[key].plural
    var name = data.data[key].title

    console.log(name);

     %>
     
     
    require('./Client/Features/<%=keyName%>/routes.js');
    require('./Client/Features/<%=keyName%>/Home/<%=keyName%>Home');
    require('./Client/Features/<%=keyName%>/List/<%=keyName%>List');
    require('./Client/Features/<%=keyName%>/Fields/<%=name%>fields');
    require('./Client/Features/<%=keyName%>/Details/<%=name%>Details');
    require('./Client/Features/<%=keyName%>/<%=name%>dataService');
    require('./Client/Features/<%=keyName%>/Modals/Services/ServicesController.js');


    <% } %>
