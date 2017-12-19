Imports Qload.Data.Manager

Namespace CRM.<%=data.plural%>.List
    <CLSCompliant(False)>
    Public Class Uc<%=data.presenterName%>sViewPresenter
        Private ReadOnly _view As <%=data.interfaceName%>
        Private ReadOnly _repositoryManager As IRepositoryManager
        'Private WithEvents _createView As ICreateEnquiryView

#Region "Constructors"

        Public Sub New(view As <%=data.interfaceName%>, repositoryManager As RepositoryManager)
            Me._repositoryManager = repositoryManager
            Me._view = view
            Me._view.IsLoading = False

            WireUpEvents()         
        End Sub

         Private Sub WireUpEvents()
           AddHandler _view.Loading, AddressOf OnLoading
        End Sub

#End Region

#Region "Event Handlers"
    
        Private Sub OnLoading(sender As Object, e As EventArgs)
            LoadData()
        End Sub

     
#End Region

#Region "Private Methods"

        Private Sub LoadData()
            
        End Sub

#End Region

    End Class
End Namespace