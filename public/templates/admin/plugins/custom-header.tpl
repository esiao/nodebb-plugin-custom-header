<h1><i class="fa fa-file-image-o"></i> Custom Header</h1>
<hr />

<div class="bg-primary alert">
    <p>This plugin allows you to set a list of images that will be displayed randomly with a nice crossfade effect on your forum as backgrounds. The first purpose is to create custom header banners but you can target anything and do as you want.</p>
</div>

<div id="custom_header">
    <div class="panel" style="padding: 10px">
        <div class="alert alert-info">
            <p>Determine which element of your page should have the custom header behaviour.</p>
            <p>For example :</p>
            <p><strong>#header-menu</strong> will point to the navbar on most NodeBB Themes</p>
            <p><strong>body</strong> will allow you to use the plugin to change your site background</p>
            <p>Tip: You can target multiple elements by separating them with a ","</p>
        </div>
        <div class="input-group">
            <span class="input-group-addon">$</span>
            <input id="selector" type="text" name="selector" value="{selector}" class="form-control">
        </div>        
    </div>
    <div class="panel" style="padding: 10px">
        <h4>List of Images that will be randomly displayed :</h4>
        <div id="images">
            <!-- BEGIN images -->
            <div class="well">
                 <form>
                    <div class="form-group" style="margin:0">
                        <span class="remove pull-right"><i class="fa fa-times pointer"></i></span>
                        <label for="image-link">Image Link</label>
                        <input type="text" name="image-link" value="{images.image}" class="form-control" >
                    </div>
                </form>
            </div>
            <!-- END images -->
        </div>
        <button class="btn btn-default" id="add">Add New Image</button>
        <button class="btn btn-primary" id="save">Save</button>
    </div>
</div>

<div class="well hidden">
     <form>
        <div class="form-group" style="margin:0">
            <span class="remove pull-right"><i class="fa fa-times pointer"></i></span>
            <label for="image-link">Image Link</label>
            <input type="text" name="image-link" value="" class="form-control" >
        </div>
    </form>
</div>

<script type='text/javascript'>
    $('#add').on('click',addImageLink);
    $('#save').on('click',saveConfiguration);
    removeImageLink();
    function addImageLink() {
        $('.well.hidden').clone().removeClass('hidden').hide().appendTo('#images').fadeIn();
        removeImageLink();
    }
    function removeImageLink() {
        $('.remove').on('click',function(){
            $(this).parents('.well').fadeOut(function(){
                $(this).remove();
            });
        });
    }
    function saveConfiguration() {
        var imagesList = $('#images .well form input').map(function(){
            return {image: this.value};
        }).get();
        var data = {
            _csrf : $('#csrf_token').val(),
            selector : $('#selector').val(),
            images : JSON.stringify(imagesList)
        }
        $.post('/api/admin/plugins/custom-header/save', data, function(data) {
            if(typeof data === 'string') {
                app.alertSuccess(data);
            }
        });
    }
</script>