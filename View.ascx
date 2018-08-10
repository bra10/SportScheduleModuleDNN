<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" Inherits="Christoc.Modules.SportScheduleFE.View" %>
<%@ Register TagPrefix="dnn" 
    Namespace="DotNetNuke.Web.Client.ClientResourceManagement" 
    Assembly="DotNetNuke.Web.Client" %>

 <dnn:DnnCssInclude runat="server"
    FilePath="~/DesktopModules/SportScheduleFE/styles/app.css" />
<dnn:DnnJsInclude runat="server"
    FilePath="~/DesktopModules/SportScheduleFE/scripts/view.js"
    ForceProvider="DnnFormBottomProvider" />

<nav class="navbar navbar-inverse">
    <div class="container-fluid"> 
        <div class="navbar-header">
       
            <a class="navbar-brand" href="#">
                 <asp:Image id="Image1" width="30" height="30" runat="server" ImageUrl="images/soccer-ball.png"/>
            </a>
          
            <a class="navbar-brand text-navbar-brand link-hover" href="#">
                  SportSchedule
            </a>
  
      </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav ">
              <li class="text-navbar"><a href="#" onclick="displaySchedule()" >Schedule</a></li>
              <li class="text-navbar"><a href="#" onclick="displayStandings()" >Standings</a></li>
            </ul>
            <!--
            <ul class="nav navbar-nav navbar-right">
                <li class="text-navbar" >
                    <a class="" href="#">
                          <img id="Image2" width="20" height="20" src="images/settings.png"/>
                          Settings
                    </a>
  
                </li>          
               
            </ul>
            -->
        </div>
    </div>
  </nav>
  
  
  
  
  <div class="container-fluid">
    
    <div class="text-center" id="leagueName">
    
    </div>
    
    
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
                <div class='text-modal'>
                    <h3 class="text-success">Please wait</h3>
                </div>
              <div id="loader" class="loading">
              </div>
            </div>
            
          </div>
        </div>
      </div>
  
  </div>
  
  
  <div class="footer text-muted text-center">
      <div> 
        © 2018 Copyright:<a href="#" class="footer-link link-hover"> SportSchedule.com </a>
      </div>
  </div>

<script type="text/javascript">
   var moduleId = <%= ModuleId %>;
   
</script>