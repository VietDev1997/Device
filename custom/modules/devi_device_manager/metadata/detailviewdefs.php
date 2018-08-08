<?php
$module_name = 'devi_device_manager';
$viewdefs [$module_name] = 
array (
  'DetailView' => 
  array (
    'templateMeta' => 
    array (
      'form' => 
      array (
        'buttons' => 
        array (
          0 => 'EDIT',
          1 => 'DUPLICATE',
          2 => 'DELETE',
          3 => 'FIND_DUPLICATES',
        ),
      ),
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
          0 => 'date_entered',
          1 => 'date_modified',
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'code',
            'label' => 'LBL_CODE',
          ),
          1 => 'name',
        ),
        2 => 
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
        3 => 
        array (
          0 => 
          array (
            'name' => 'mouse',
            'label' => 'LBL_MOUSE',
          ),
          1 => 
          array (
            'name' => 'case_mt',
            'label' => 'LBL_CASE_MT',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'keyboard',
            'label' => 'LBL_KEYBOARD',
          ),
          1 => 
          array (
            'name' => 'config',
            'label' => 'LBL_CONFIG',
          ),
        ),
        5 => 
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
        6 => 
        array (
          0 => 
          array (
            'name' => 'history',
            'label' => 'LBL_HISTORY',
          ),
          1 => '',
        ),
        7 => 
        array (
          0 => 
          array (
            'name' => 'created_by_name',
            'label' => 'LBL_CREATED',
          ),
          1 => 
          array (
            'name' => 'users_devi_device_manager_1_name',
          ),
        ),
        8 => 
        array (
          0 => 
          array (
            'name' => 'ueser_ueser_report_devi_device_manager_name',
          ),
        ),
      ),
    ),
  ),
);
?>
