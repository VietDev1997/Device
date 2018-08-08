<?php
$module_name = 'devi_device_manager';
$listViewDefs [$module_name] = 
array (
  'CODE' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_CODE',
    'width' => '10%',
    'default' => true,
  ),
  'NAME' => 
  array (
    'width' => '32%',
    'label' => 'LBL_NAME',
    'default' => true,
    'link' => true,
  ),
  'STATUS' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_STATUS',
    'width' => '10%',
    'default' => true,
  ),
  'MONITOR' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_MONITOR',
    'width' => '10%',
    'default' => true,
  ),
  'KEYBOARD' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_KEYBOARD',
    'width' => '10%',
    'default' => true,
  ),
  'MOUSE' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_MOUSE',
    'width' => '10%',
    'default' => true,
  ),
  'CASE_MT' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_CASE_MT',
    'width' => '10%',
    'default' => true,
  ),
  'PRICE' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_PRICE',
    'width' => '10%',
    'default' => true,
  ),
  'CONFIG' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_CONFIG',
    'width' => '10%',
    'default' => true,
  ),
  'QUANTYTI' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_QUANTYTI',
    'width' => '10%',
    'default' => true,
  ),
  'HISTORY' => 
  array (
    'type' => 'varchar',
    'label' => 'LBL_HISTORY',
    'width' => '10%',
    'default' => true,
  ),
  'USERS_DEVI_DEVICE_MANAGER_1_NAME' => 
  array (
    'type' => 'relate',
    'link' => true,
    'label' => 'LBL_USERS_DEVI_DEVICE_MANAGER_1_FROM_USERS_TITLE',
    'id' => 'USERS_DEVI_DEVICE_MANAGER_1USERS_IDA',
    'width' => '10%',
    'default' => true,
  ),
  'UESER_UESER_REPORT_DEVI_DEVICE_MANAGER_NAME' => 
  array (
    'type' => 'relate',
    'link' => true,
    'label' => 'LBL_UESER_UESER_REPORT_DEVI_DEVICE_MANAGER_FROM_UESER_UESER_REPORT_TITLE',
    'id' => 'UESER_UESER_REPORT_DEVI_DEVICE_MANAGERUESER_UESER_REPORT_IDA',
    'width' => '10%',
    'default' => true,
  ),
  'CREATED_BY_NAME' => 
  array (
    'type' => 'relate',
    'link' => true,
    'label' => 'LBL_CREATED',
    'id' => 'CREATED_BY',
    'width' => '10%',
    'default' => true,
  ),
  'ASSIGNED_USER_NAME' => 
  array (
    'width' => '9%',
    'label' => 'LBL_ASSIGNED_TO_NAME',
    'module' => 'Employees',
    'id' => 'ASSIGNED_USER_ID',
    'default' => true,
  ),
);
?>
