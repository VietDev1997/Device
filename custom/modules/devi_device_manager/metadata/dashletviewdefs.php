<?php
$dashletData['devi_device_managerDashlet']['searchFields'] = array (
  'date_entered' => 
  array (
    'default' => '',
  ),
  'date_modified' => 
  array (
    'default' => '',
  ),
  'assigned_user_id' => 
  array (
    'type' => 'assigned_user_name',
    'default' => 'Administrator',
  ),
);
$dashletData['devi_device_managerDashlet']['columns'] = array (
  'code' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_CODE',
    'width' => '10%',
    'default' => true,
    'name' => 'code',
  ),
  'name' => 
  array (
    'width' => '40%',
    'label' => 'LBL_LIST_NAME',
    'link' => true,
    'default' => true,
    'name' => 'name',
  ),
  'status' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_STATUS',
    'width' => '10%',
    'default' => true,
    'name' => 'status',
  ),
  'users_devi_device_manager_1_name' => 
  array (
    'type' => 'relate',
    'link' => true,
    'label' => 'LBL_USERS_DEVI_DEVICE_MANAGER_1_FROM_USERS_TITLE',
    'id' => 'USERS_DEVI_DEVICE_MANAGER_1USERS_IDA',
    'width' => '10%',
    'default' => true,
    'name' => 'users_devi_device_manager_1_name',
  ),
  'ueser_ueser_report_devi_device_manager_name' => 
  array (
    'type' => 'relate',
    'link' => true,
    'label' => 'LBL_UESER_UESER_REPORT_DEVI_DEVICE_MANAGER_FROM_UESER_UESER_REPORT_TITLE',
    'id' => 'UESER_UESER_REPORT_DEVI_DEVICE_MANAGERUESER_UESER_REPORT_IDA',
    'width' => '10%',
    'default' => true,
  ),
  'date_entered' => 
  array (
    'width' => '15%',
    'label' => 'LBL_DATE_ENTERED',
    'default' => true,
    'name' => 'date_entered',
  ),
  'date_modified' => 
  array (
    'width' => '15%',
    'label' => 'LBL_DATE_MODIFIED',
    'name' => 'date_modified',
    'default' => false,
  ),
  'created_by' => 
  array (
    'width' => '8%',
    'label' => 'LBL_CREATED',
    'name' => 'created_by',
    'default' => false,
  ),
  'assigned_user_name' => 
  array (
    'width' => '8%',
    'label' => 'LBL_LIST_ASSIGNED_USER',
    'name' => 'assigned_user_name',
    'default' => false,
  ),
  'config' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_CONFIG',
    'width' => '10%',
    'default' => false,
    'name' => 'config',
  ),
  'user_report' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_USER_REPORT',
    'width' => '10%',
    'default' => false,
    'name' => 'user_report',
  ),
);
