import React from 'react';

export class StMultiList extends React.Component {
    constructor(props) {
        super(props);
        var self = this;
    }
    componentDidMount() {
        sharePointReady();

        function sharePointReady() {
            hostweburl = decodeURIComponent(getQueryStringParameter('SPHostUrl'));
            var scriptbase = hostweburl + '/_layouts/15/';
            $.getScript(scriptbase + 'SP.RequestExecutor.js', getAllList);


            $(".logo").click(function () {
                var redirectUrl = decodeURIComponent(getQueryStringParameter('SPHostUrl'));
                window.location.href = redirectUrl + "/_layouts/15/viewlsts.aspx";
            });

            $(".goBack-homepage").click(function () {
                $(".selectMyList").val(" ");
                $(".listFieldsSelector").hide();
                $(".showMyList").slideUp();
                $(".selectListFields").slideDown();
            });

            getAllList();
        }

        function getQueryStringParameter(param) {
            var params = document.URL.split("?")[1].split("&");
            //var strParams = "";    
            for (var i = 0; i < params.length; i = i + 1) {
                var singleParam = params[i].split("=");
                if (singleParam[0] == param) {
                    return singleParam[1];
                }
            }
        }

        function getAllList() {
            var appContextSite;
            var collList;
            appContextSite = new SP.ClientContext(hostweburl);
            this.web = appContextSite.get_web(); //Code to get the cross domain
            collList = this.web.get_lists();
            appContextSite.load(collList);
            appContextSite.executeQueryAsync(Function.createDelegate(this, successHandler), Function.createDelegate(this, errorHandler));
            function successHandler() {
                var listInfo = '<option value="" selected disabled>Please select a list</option>';
                var listEnumerator = collList.getEnumerator();
                while (listEnumerator.moveNext()) {
                    var oList = listEnumerator.get_current();

                    if (oList.get_baseTemplate() === 100 && oList.get_hidden() !== true) {
                        listInfo += '<option>' + oList.get_title() + '</option>';
                    }
                }
                $("#testContainer").html('<select className="form-control selectMyList">' + listInfo + '</select>');

                $(".selectMyList").on('change', function (e) {
                    e.preventDefault();
                    $("#listFields").empty();
                    $(".checkAllLabel").html("Select all");
                    $(".checkAll").prop("checked", false);
                    $(".checkField").prop("checked", false);
                    var listSelected = $(this).val();
                    $("#selectedList").html(listSelected);
                    getAllField(listSelected);
                });
            }
            function errorHandler(sender, args) {
                document.getElementById("testContainer").innerText = "Could not complete cross-domain call: " + args.get_message();
            }
        }

        function getAllField(listName) {
            var url = hostweburl +
               "/_api/web/lists/getbytitle('" + listName + "')/Fields";
            var columnExist = false;

            $.ajax({
                url: url,
                type: "GET",
                contentType: "application/json;odata=verbose",
                headers: { "Accept": "application/json;odata=verbose" },
                success: function (data) {
                    if (data.d.results.length > 0) {
                        var listInfo = "";
                        columnExist = false;
                        $.each(data.d.results, function (index, value) {
                            var titleField = value.Title;
                            var internalNameField = value.InternalName;
                            var $basicField = value.FromBaseType;
                            var $type = value.TypeAsString;
                            if (titleField !== "STCompleted" && titleField !== "STStatus" && $type !== "Lookup" && $type !== "TargetTo" && $type !== "Computed") {
                                if (!$basicField || internalNameField == "Title" || internalNameField == "Created" || internalNameField == "Modified" || internalNameField == "Author" || internalNameField == "Editor") {
                                    listInfo += '<tr><td><div className="listFieldItem" data-type="' + $type + '" data-title="' + titleField + '" data-internalName="' + internalNameField + '"><input type="checkbox" className="checkField" /><span className="titleField">' + titleField + '</span></div></td></tr>';
                                }
                            } else {
                                if (titleField === "STCompleted") {
                                    columnExist = true;
                                }
                            }

                        });

                        $("#listFields").html(listInfo);
                        $(".listFieldsSelector").slideDown();

                        $(".checkAll").click(function () {
                            if ($(this).prop('checked')) {
                                $(".checkAllLabel").html("Deselect all");
                                $(".checkField").prop("checked", true);
                                $(".checkField").parent().parent().addClass('fieldSelected');
                            } else {
                                $(".checkAllLabel").html("Select all");
                                $(".checkField").prop("checked", false);
                                $(".checkField").parent().parent().removeClass('fieldSelected');
                            }
                        });

                        $(".checkField").click(function () {
                            if ($(this).prop('checked')) {
                                $(this).parent().parent().addClass('fieldSelected');
                            } else {
                                $(this).parent().parent().removeClass('fieldSelected');
                            }
                        });

                        $(".saveListSelection").click(function (e) {
                            e.preventDefault();
                            var arrayFieldSelected = [];
                            var htmlHeader = "<th></th><th>Status</th>";
                            $.each($(".checkField"), function () {
                                if ($(this).prop('checked')) {
                                    var fieldType = $(this).parent().attr("data-type");
                                    var internalName = $(this).parent().attr("data-internalName");
                                    var title = $(this).parent().attr("data-title");

                                    var objCheck = {
                                        "InternalName": internalName,
                                        "Type": fieldType,
                                        "Title": title
                                    };

                                    arrayFieldSelected.push(objCheck);

                                    htmlHeader += "<th>" + title + "</th>";
                                }
                            });

                            $("#listItemsHead").html(htmlHeader);

                            var listSelected = $(".selectMyList").val();
                            if (!columnExist) {
                                addField(listSelected, arrayFieldSelected);
                            } else {
                                getAllItems(listSelected, arrayFieldSelected);
                            }

                        });
                    }
                }, error: function (data) {
                    alert('Failed');
                }
            });
        }

        function addField(listName, arrayFields) {
            var hostWebUrl = decodeURIComponent(getQueryStringParameter('SPHostUrl'));
            //get app context using host web url  
            var appCtxSite = new SP.ClientContext(hostWebUrl);
            //get current web  
            var currentWEB = appCtxSite.get_web();
            //get list from host web  
            var list = currentWEB.get_lists();
            //load the list  
            appCtxSite.load(list);
            appCtxSite.executeQueryAsync(function () {
                //get custom list by name  
                var currentList = list.getByTitle(listName);
                //get field collection from current list  
                var fldCollection = currentList.get_fields();
                //set the type and field details  
                var f1 = appCtxSite.castTo(fldCollection.addFieldAsXml('<Field Type="Boolean" DisplayName="STCompleted" Name="STCompleted" />', true, SP.AddFieldOptions.addToDefaultContentType), SP.FieldText);
                f1.set_title("STCompleted");
                f1.set_description("Yes/No for check your item");
                //update  
                f1.update();

                var f2 = appCtxSite.castTo(fldCollection.addFieldAsXml('<Field Type="Choice" DisplayName="STStatus" Name="STStatus" />', true, SP.AddFieldOptions.addToDefaultContentType), SP.FieldChoice);
                f2.set_title("STStatus");
                var choices = Array("Completed", "Pending", "In progress");
                f2.set_choices(choices);
                f2.set_description("Item status");
                //update  
                f2.update();


                appCtxSite.executeQueryAsync(function () {
                    console.log("Field Creation Success");
                    getAllItems(listName, arrayFields);
                },

                function (sender, args) {
                    console.log("Field Creation failed : " + args.get_message());
                });
            }, function (sender, args) {
                alert('Failed to add field in list. Error:' + args.get_message());
            });
        }

        function getAllItems(listName, arrayFields) {
            var expand = "";
            var select = "";
            var expandSelect = "";
            var count = 0;
            var separ = "";
            var countSep = 0;
            var separSep = "";
            var userFieldExist = false;

            $.each(arrayFields, function (i, f) {
                if (f.Type === "User" || f.Type === "Group") {
                    userFieldExist = true;
                }

                if (count > 0) {
                    separ = ",";
                }

                if (f.InternalName.indexOf('_x0024_') > -1) {
                    f.InternalName = "OData_" + f.InternalName;
                }

                if (f.Type === "User") {
                    if (countSep > 0) {
                        separSep = ",";
                    }
                    select += separ + f.InternalName + "/Title";
                    expand += separSep + f.InternalName;
                    countSep++;

                } else {
                    select += separ + f.InternalName;
                }

                count++;
            })

            if (userFieldExist) {
                expandSelect = "$select=Id,STCompleted,STStatus," + select + "&$expand=" + expand + "&";
            }

            var url = hostweburl +
               "/_api/web/lists/getbytitle('" + listName + "')/items?" + expandSelect + "$top=1000";

            $.ajax({
                url: url,
                type: "GET",
                contentType: "application/json;odata=verbose",
                headers: { "Accept": "application/json;odata=verbose" },
                success: function (data) {
                    if (data.d.results.length > 0) {
                        var htmlTable = "";

                        $.each(data.d.results, function (index, value) {
                            var classRow = "";
                            var checked = "";
                            var optionStatus = "";

                            if (value["STCompleted"]) {
                                classRow = "strikeout";
                                checked = "checked";
                            }


                            if (!value["STStatus"] || value["STStatus"] === null) {
                                classRow += "";
                                optionStatus = "<option selected></option><option>Completed</option><option>Pending</option><option>In progress</option>";
                            }
                            else if (value["STStatus"] === "Completed") {
                                classRow += " stCompleted";
                                optionStatus = "<option></option><option selected>Completed</option><option>Pending</option><option>In progress</option>";
                            } else if (value["STStatus"] === "In progress") {
                                classRow += " stInProgress";
                                optionStatus = "<option></option><option>Completed</option><option>Pending</option><option selected>In progress</option>";
                            } else if (value["STStatus"] === "Pending") {
                                classRow += " stPending";
                                optionStatus = "<option></option><option>Completed</option><option selected>Pending</option><option>In progress</option>";
                            } else if (value["STStatus"] === "") {
                                classRow += "";
                                optionStatus = "<option selected></option><option>Completed</option><option>Pending</option><option>In progress</option>";
                            }

                            htmlTable += "<tr className='" + classRow + "'><td className='checkItem' data-id='" + value.Id + "'><input type='checkbox' className='selectCompleted' " + checked + "/></td>";
                            htmlTable += "<td className='statusItem' data-id='" + value.Id + "'><select className='form-control selectStatus'>"+optionStatus+"</select></td>";

                            $.each(arrayFields, function (indexField, valueField) {
                                if (valueField.Type === "URL") {
                                    htmlTable += "<td><a href='" + value[valueField.InternalName].Url + "'>" + value[valueField.InternalName].Description + "</a></td>";
                                } else if (valueField.Type === "Choice" || valueField.Type === "HTML" || valueField.Type === "Text" || valueField.Type === "Number" || valueField.Type === "Currency" || valueField.Type === "Boolean") {
                                    if (value[valueField.InternalName] && value[valueField.InternalName] !== undefined && value[valueField.InternalName] !== "undefined") {
                                        htmlTable += "<td>" + value[valueField.InternalName] + "</td>";
                                    } else {
                                        htmlTable += "<td></td>";
                                    }
                                } else if (valueField.Type === "Note") {
                                    if (value[valueField.InternalName] && value[valueField.InternalName] !== undefined && value[valueField.InternalName] !== "undefined" && $(value[valueField.InternalName]).text() && $(value[valueField.InternalName]).text() !== undefined) {
                                        htmlTable += "<td>" + $(value[valueField.InternalName]).text() + "</td>";
                                    } else {
                                        htmlTable += "<td></td>";
                                    }
                                } else if (valueField.Type === "User") {
                                    if (value[valueField.InternalName] && value[valueField.InternalName] !== undefined && value[valueField.InternalName] !== "undefined" && value[valueField.InternalName].Title && value[valueField.InternalName].Title !== undefined) {
                                        htmlTable += "<td>" + value[valueField.InternalName].Title + "</td>";
                                    } else {
                                        htmlTable += "<td></td>";
                                    }
                                } else if (valueField.Type === "Group") {
                                    if (value[valueField.InternalName] && value[valueField.InternalName] !== undefined && value[valueField.InternalName] !== "undefined" && value[valueField.InternalName].Title && value[valueField.InternalName].Title !== undefined) {
                                        htmlTable += "<td>" + value[valueField.InternalName].Title + "</td>";
                                    } else {
                                        htmlTable += "<td></td>";
                                    }
                                } else if (valueField.Type === "DateTime") {
                                    if (value[valueField.InternalName] && value[valueField.InternalName] !== undefined && value[valueField.InternalName] !== "undefined") {
                                        var dateFormat = value[valueField.InternalName].split('T')[0];
                                        var dateTransform = dateFormat.split('-')[2] + "-" + dateFormat.split('-')[1] + "-" + dateFormat.split('-')[0] + " " + value[valueField.InternalName].split('T')[1].replace('Z', '');
                                        htmlTable += "<td>" + dateTransform + "</td>";
                                    } else {
                                        htmlTable += "<td></td>";
                                    }
                                }
                            });
                            htmlTable += "</tr>";
                        });

                        $("#listItems").html(htmlTable);
                        $(".selectListFields").slideUp();
                        $(".showMyList").slideDown();


                        $(".selectCompleted").click(function () {
                            if ($(this).prop('checked')) {
                                $(this).parent().parent().addClass('strikeout');
                            } else {
                                $(this).parent().parent().removeClass('strikeout');
                            }
                        });


                        $(".selectStatus").on('change', function (e) {
                            e.preventDefault();
                            if ($(this).val() === "Completed") {
                                $(this).parent().parent().addClass('stCompleted');
                                $(this).parent().parent().removeClass('stInProgress');
                                $(this).parent().parent().removeClass('stPending');
                            } else if ($(this).val() === "Pending") {
                                $(this).parent().parent().addClass('stPending');
                                $(this).parent().parent().removeClass('stInProgress');
                                $(this).parent().parent().removeClass('stCompleted');
                            } else if ($(this).val() === "In progress") {
                                $(this).parent().parent().addClass('stInProgress');
                                $(this).parent().parent().removeClass('stCompleted');
                                $(this).parent().parent().removeClass('stPending');
                            } else if ($(this).val() === "") {
                                $(this).parent().parent().removeClass('stInProgress');
                                $(this).parent().parent().removeClass('stCompleted');
                                $(this).parent().parent().removeClass('stPending');
                            }
                        });


                        $(".saveItemSelection").click(function () {
                            var arrayItemSelected = [];
                            $.each($(".selectCompleted"), function () {
                                var idItem = $(this).parent().attr("data-id");
                                var statusItem = $(this).parent().parent().find('.selectStatus').val();

                                if ($(this).prop('checked')) {
                                    updateItem(listName, idItem, true, statusItem);
                                } else {
                                    updateItem(listName, idItem, false, statusItem);
                                }
                            });
                        });
                    }
                }
            });
        }

        function updateItem(listName, idItem, STCompleted, STStatus) {
            var itemArray = [];
            //Get host web URL  
            var hostWebUrl = decodeURIComponent(getQueryStringParameter('SPHostUrl'));
            //get app context using host web url  
            var appCtxSite = new SP.ClientContext(hostWebUrl);
            //get current web  
            var currentWEB = appCtxSite.get_web();

            var oList = currentWEB.get_lists().getByTitle(listName);
            var oListItem = oList.getItemById(idItem);
            oListItem.set_item('STCompleted', STCompleted);
            oListItem.set_item('STStatus', STStatus);
            oListItem.update();
            itemArray.push(oListItem);
            appCtxSite.load(itemArray[itemArray.length - 1]);

            appCtxSite.executeQueryAsync(function () {
                console.log("Item update");
                window.location.reload();
            }, function (sender, args) {
                console.log("Error during update item : " + args.get_message());
            });
        }
    }
    render() {
        return (
            <div className="appST stHelpDesk_app">
                <div className="title-myApp"> 
                ST MULTILIST
                </div>
                <div className="myApps container">
                    <div className="col-md-12">
                        <div className="selectListFields">
                            <div className="titleZone">Select a list</div>
                            <p id="testContainer" className="form-group">
                                initializing...
                            </p>

                            <div className="listFieldsSelector" style="display: none">
                                <div className="titleZone">Customize your task list view.</div>
                                <div className="descrZone">Select all the fields that you want display in your view.</div>
                                <div className="listFields-container">
                                    <div className="selectAllArea">
                                        <input type="checkbox" className="checkAll" /><span className="checkAllLabel">Select all</span>
                                    </div>
                                    <table className="table table-hover">
                                        <tbody id="listFields">
                                        </tbody>
                                    </table>
                                </div>
                                <button type="button" className="btn saveListSelection">Generate</button>
                            </div>
                        </div>

                        <div className="showMyList" style="display: none">
                            <div className="goBack-homepage">
                                <img className="icon icons8-Long-Arrow-Left" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAA30lEQVRIS+2U/Q2CMBTE7ybQDWQDdQNHcARH0wl0Ax3BEXADneCZI21SPgOlEGPoX9Dy+utdj0fMNDgTBwso2unfsM7MMgBXySC5j5aj+rZiM9sBuANYO9Ao9Y3FZnZwSgrIJCAzO3q7QrUk0ymq2tVg6xvAM5h/BM+a17rGi2ReOqh/6QGJycKF5KmwPgDpBJuY3bpqvOUhSNK3c4D0zwi2SgirW6fN3T3pgttgn55hyFvDUAlFDZY03l2wSUCBjTefxMlADqYWdAaQkVTvix6j2soQ6gIa4lbp2/+z7gvHwkYbyI5xugAAAABJRU5ErkJggg==" width="26" height="26" />
                                <div className="backLabel">Back to homepage</div>
                            </div>
                            <div id="selectedList">List selected</div>
                            <table className="table table-bordered">
                                <thead className="headerTableItems">
                                    <tr id="listItemsHead">

                                    </tr>
                                </thead>
                                <tbody id="listItems">

                                </tbody>
                            </table>
                            <div className="legenda-container">
                                <div className="legenda col-md-12">Check the checkbox for close it</div>
                                <div className="legenda col-md-12" style="float: right; width: 350px;">
                                    <div style="float:left; padding-right: 10px">Legenda:</div>
                                    <div style="float:left;">
                                        <div className="stCompleted" style="width: 15px;height: 15px;float: left;">&nbsp;</div><span className="descriptionLegenda">Completed</span>
                                    </div>
                                    <div style="float:left;">
                                         <div className="stPending" style="width: 15px;height: 15px;float: left;">&nbsp;</div><span className="descriptionLegenda">In pending</span>
                                    </div>
                                    <div style="float:left;">
                                        <div className="stInProgress" style="width: 15px;height: 15px;float: left;">&nbsp;</div><span className="descriptionLegenda">In progress</span>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn saveItemSelection">Complete</button>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}












