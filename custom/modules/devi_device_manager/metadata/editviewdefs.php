<?php
$module_name = 'devi_device_manager';
$viewdefs [$module_name] = 
array (
  'EditView' => 
  array (
    'templateMeta' => 
    array (
      'maxColumns' => '2',
      'widths' => 
      array (
        0 => 
        array (
          'label' => '10',
          'field' => '30',
        ),
        1 => 
        array (
          'label' => '10',
          'field' => '30',
        ),
      ),
      'useTabs' => false,
      'tabDefs' => 
      array (
        'DEFAULT' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
      ),
    ),
    'panels' => 
    array (
      'default' => 
      array (
        0 => 
        array (
          0 => 'name',
          1 => 
          array (
            'name' => 'code',
            'label' => 'LBL_CODE',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'status',
            'label' => 'LBL_STATUS',
          ),
          1 => 
          array (
            'name' => 'monitor',
            'label' => 'LBL_MONITOR',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'keyboard',
            'label' => 'LBL_KEYBOARD',
          ),
          1 => 
          array (
            'name' => 'mouse',
            'label' => 'LBL_MOUSE',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'case_mt',
            'label' => 'LBL_CASE_MT',
          ),
          1 => 
          array (
            'name' => 'config',
            'label' => 'LBL_CONFIG',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'price',
            'label' => 'LBL_PRICE',
          ),
          1 => 
          array (
            'name' => 'quantyti',
            'label' => 'LBL_QUANTYTI',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'history',
            'label' => 'LBL_HISTORY',
          ),
          1 => 
          array (
            'name' => 'user_report',
            'label' => 'LBL_USER_REPORT',
          ),
        ),
        6 => 
        array (
          0 => 
          array (
            'name' => 'users_devi_device_manager_1_name',
          ),
          1 => 
          array (
            'name' => 'ueser_ueser_report_devi_device_manager_name',
          ),
        ),
      ),
    ),
  ),
);
?>
