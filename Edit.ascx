<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Edit.ascx.cs" Inherits="Christoc.Modules.SportScheduleFE.Edit" %>
<%@ Register TagPrefix="dnn" 
    Namespace="DotNetNuke.Web.Client.ClientResourceManagement" 
    Assembly="DotNetNuke.Web.Client" %>
 
<dnn:DnnCssInclude runat="server"
    FilePath="~/DesktopModules/SportScheduleFE/plugins/bootstrap/css/bootstrap.min.css" />
<dnn:DnnCssInclude runat="server"
    FilePath="~/DesktopModules/SportScheduleFE/styles/app.css" />


<dnn:DnnJsInclude runat="server"
    FilePath="~/DesktopModules/SportScheduleFE/plugins/bootstrap/js/bootstrap.min.js"
    ForceProvider="DnnFormBottomProvider" />
<dnn:DnnJsInclude runat="server"
    FilePath="~/DesktopModules/SportScheduleFE/scripts/edit.js"
    ForceProvider="DnnFormBottomProvider" />


  <nav class="navbar navbar-inverse">
    <div class="container-fluid"> 
        <div class="navbar-header-edit">
       
            <a class="navbar-brand-edit" href="#">
                   <asp:Image id="Image1" width="30" height="30" runat="server" ImageUrl="images/soccer-ball.png"/>

            </a>
          
            <a class="navbar-brand-edit brand-text-edit link-hover" href="#">
                  SportSchedule
            </a>
            <a class="navbar-brand-edit" href="#">
                   <asp:Image id="Image2" width="30" height="30" runat="server" ImageUrl="images/soccer-ball.png"/>

            </a>
  
      </div>
        
    </div>
  </nav>
  
  
  
  
  <div class="container">
    
      <div class="text-center">
            <h1 class="page-header">Edit Schedule</h1>
      </div>

      <hr>
    
      
      <div id="content" class="hidden">
        
      </div>

    <div id="errorMessage" class="hidden">
        <div class='row text-center image-error'>
                       
            <asp:Image runat='server' width='220'  height='220' CssClass='d-inline-block align-top' 
                            alt='' ImageUrl='images/error.png' />
            <div id="message-text">

            </div>

        </div>
         
    </div>

      <div class="modal fade" id="loadingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
               
                <div class="modal-body text-center">
                    <div class='text-success text-modal'>
                        <h3>Please wait</h3>
                    </div>
                  <div id="loader" class="loading">
                  </div>
                </div>
                
              </div>
            </div>
          </div>
      
      
        
        <div class="modal fade" id="validationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
               
                <div class="modal-body text-center">
                    <div class='row text-modal text-success'>
                        <h3>Please select a league</h3>
                    </div>
                    <div class='row text-center'>
                        <button type='button' class='btn btn-success' data-dismiss="modal">OK</button>
                    </div>
                 
                  
                </div>
                
              </div>
            </div>
          </div>
                
    
    </div>
  
    <div class="footer text-muted text-center">
        <div> 
            © 2018 Copyright:<a href="#" class="text-success link-hover"> SportSchedule.com </a>
        </div>
    </div>

<script type="text/javascript">
   var moduleId = <%= ModuleId %>;
</script>
    
   