@extends('layouts.admin')

@section('content')
    <div class="card">
        <div class="card-header">
            <h4>Edit/Update Category</h4>
        </div>

        <section class="card-body">
            <form action="{{ url('update-category/'.$category->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
                <div class="row">
                    <div class="col-md-12 mb-3 outline-none">
                        <label for="">Category</label>
                        <input type="text" value="{{ $category->name }}" class="form-control" name="name" required>
                    </div>

                    <div class="col-md-12 mb-3 outline-none">
                        <label for="">Description</label>
                        <textarea name="description" rows="3" class="form-control" required>{{ $category->description }}</textarea>
                    </div>

                    <div class="col-md-12 mt-3">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </div>
            </form>
        </section>

        <div class="settingSidebar">
            <a href="javascript:void(0)" class="settingPanelToggle"> <i class="fa fa-spin fa-cog"></i>
            </a>
            <div class="settingSidebar-body ps-container ps-theme-default">
              <div class=" fade show active">
                <div class="setting-panel-header">Setting Panel
                </div>
                <div class="p-15 border-bottom">
                  <h6 class="font-medium m-b-10">Select Layout</h6>
                  <div class="selectgroup layout-color w-50">
                    <label class="selectgroup-item">
                      <input type="radio" name="value" value="1" class="selectgroup-input-radio select-layout" checked>
                      <span class="selectgroup-button">Light</span>
                    </label>
                    <label class="selectgroup-item">
                      <input type="radio" name="value" value="2" class="selectgroup-input-radio select-layout">
                      <span class="selectgroup-button">Dark</span>
                    </label>
                  </div>
                </div>
                <div class="p-15 border-bottom">
                  <h6 class="font-medium m-b-10">Sidebar Color</h6>
                  <div class="selectgroup selectgroup-pills sidebar-color">
                    <label class="selectgroup-item">
                      <input type="radio" name="icon-input" value="1" class="selectgroup-input select-sidebar">
                      <span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                        data-original-title="Light Sidebar"><i class="fas fa-sun"></i></span>
                    </label>
                    <label class="selectgroup-item">
                      <input type="radio" name="icon-input" value="2" class="selectgroup-input select-sidebar" checked>
                      <span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip"
                        data-original-title="Dark Sidebar"><i class="fas fa-moon"></i></span>
                    </label>
                  </div>
                </div>
                <div class="p-15 border-bottom">
                  <h6 class="font-medium m-b-10">Color Theme</h6>
                  <div class="theme-setting-options">
                    <ul class="choose-theme list-unstyled mb-0">
                      <li title="white" class="active">
                        <div class="white"></div>
                      </li>
                      <li title="cyan">
                        <div class="cyan"></div>
                      </li>
                      <li title="black">
                        <div class="black"></div>
                      </li>
                      <li title="purple">
                        <div class="purple"></div>
                      </li>
                      <li title="orange">
                        <div class="orange"></div>
                      </li>
                      <li title="green">
                        <div class="green"></div>
                      </li>
                      <li title="red">
                        <div class="red"></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="p-15 border-bottom">
                  <div class="theme-setting-options">
                    <label class="m-b-0">
                      <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input"
                        id="mini_sidebar_setting">
                      <span class="custom-switch-indicator"></span>
                      <span class="control-label p-l-10">Mini Sidebar</span>
                    </label>
                  </div>
                </div>
                <div class="p-15 border-bottom">
                  <div class="theme-setting-options">
                    <label class="m-b-0">
                      <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input"
                        id="sticky_header_setting">
                      <span class="custom-switch-indicator"></span>
                      <span class="control-label p-l-10">Sticky Header</span>
                    </label>
                  </div>
                </div>
                <div class="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                  <a href="#" class="btn btn-icon icon-left btn-primary btn-restore-theme">
                    <i class="fas fa-undo"></i> Restore Default
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
@endsection