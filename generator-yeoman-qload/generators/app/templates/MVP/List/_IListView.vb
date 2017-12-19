Imports System.Collections.Generic
Imports Qload.Data

Namespace <%=data.plural%>.List
    Public Interface I<%=data.plural%>ListView

        Event Add As EventHandler(Of EventArgs)
        Event Loading As EventHandler(Of EventArgs)
        Event SelectionChanged As EventHandler(Of EventArgs(of <%=data.name%>ViewModel))

        Property <%=data.plural%> As List(Of <%=data.name%>ViewModel)

        Property IsLoading As Boolean        

        Sub LoadData()

    End Interface
End Namespace