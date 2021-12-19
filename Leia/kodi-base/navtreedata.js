/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Kodi Documentation", "index.html", [
    [ "Introduction", "index.html", [
      [ "What is Kodi?", "index.html#doxy_whatisxbmc", null ]
    ] ],
    [ "Code Guidelines", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html", [
      [ "Table of Contents", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md1", null ],
      [ "1. Motivation", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md2", null ],
      [ "2. Language standard", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md3", null ],
      [ "3. Formatting", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md4", [
        [ "3.1. Braces", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md5", null ],
        [ "3.2. Indentation", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md6", null ],
        [ "3.3. Control statements", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md7", [
          [ "3.3.1. if else", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md8", null ],
          [ "3.3.2. switch case", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md9", null ],
          [ "3.3.3. try catch", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md10", null ]
        ] ],
        [ "3.4. Whitespace", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md11", null ],
        [ "3.5. Vertical alignment", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md12", null ],
        [ "3.6. Superfluous <tt>void</tt>", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md13", null ]
      ] ],
      [ "4. Statements", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md14", [
        [ "4.1. Multiple statements", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md15", null ],
        [ "4.2. <tt>switch</tt> default case", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md16", null ]
      ] ],
      [ "5. Declarations", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md17", [
        [ "5.1. Multiple declarations", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md18", null ],
        [ "5.2. Pointer and reference types", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md19", null ],
        [ "5.3. <tt>const</tt> and other modifiers", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md20", null ],
        [ "5.4. Initialization", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md21", null ]
      ] ],
      [ "6. Scoping", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md22", [
        [ "6.1. Namespaces", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md23", null ],
        [ "6.2. Local functions", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md24", null ]
      ] ],
      [ "7. Headers", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md25", null ],
      [ "8. Naming", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md26", [
        [ "8.1. Namespaces", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md27", null ],
        [ "8.2. Constants", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md28", null ],
        [ "8.3. Enums", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md29", null ],
        [ "8.4. Interfaces", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md30", null ],
        [ "8.5. Classes", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md31", null ],
        [ "8.6. Methods", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md32", null ],
        [ "8.7. Variables", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md33", [
          [ "Member variables", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md34", null ],
          [ "Global variables", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md35", null ]
        ] ]
      ] ],
      [ "9. Comments", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md36", [
        [ "9.1. General", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md37", null ],
        [ "9.2. Doxygen", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md38", null ]
      ] ],
      [ "10. Logging", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md39", null ],
      [ "10. Classes", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md40", [
        [ "10.1. Member visibility", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md41", null ],
        [ "10.13. Const correctness", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md42", null ],
        [ "10.10. Overriding virtual functions", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md43", null ],
        [ "10.7. Default member initialization", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md44", null ],
        [ "10.1. Destructors in interfaces", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md45", null ]
      ] ],
      [ "10. Other conventions", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md46", [
        [ "10.2. Output parameters", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md47", null ],
        [ "10.3. Casts", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md48", null ],
        [ "10.4. <tt>NULL</tt> vs <tt>nullptr</tt>", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md49", null ],
        [ "10.5. <tt>auto</tt>", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md50", null ],
        [ "10.6. <tt>for</tt> loops", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md51", null ],
        [ "10.8. Include guards", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md52", null ],
        [ "10.9. Type aliases", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md53", null ],
        [ "10.11. <tt>goto</tt>", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md54", null ],
        [ "10.12. Macros", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md55", null ],
        [ "10.14. <tt>constexpr</tt>", "d0/d18/md__github_workspace_docs__c_o_d_e__g_u_i_d_e_l_i_n_e_s.html#autotoc_md56", null ]
      ] ]
    ] ],
    [ "General", "d5/dd9/general.html", "d5/dd9/general" ],
    [ "Revisions", "d7/d9a/revisions.html", "d7/d9a/revisions" ],
    [ "General Development parts", "da/dc1/general_parts.html", "da/dc1/general_parts" ],
    [ "Skin Development", "da/de7/skin_parts.html", "da/de7/skin_parts" ],
    [ "Bug List", "de/da5/bug.html", null ],
    [ "Todo List", "dd/da0/todo.html", null ],
    [ "Deprecated List", "da/d58/deprecated.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", "namespacemembers_eval" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", "functions_eval" ],
        [ "Properties", "functions_prop.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", "globals_type" ],
        [ "Enumerations", "globals_enum.html", "globals_enum" ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d0/d1a/struct_v_a_a_p_i_1_1_c_vaapi_config.html#a3c78077669519af9af253928bca6f1ac",
"d0/d25/_copy_frame_8cpp.html",
"d0/d33/class_active_a_e_1_1_i_a_e_resample.html#a3cfe5ed38938102b6836f8e6309363b8",
"d0/d3f/class_k_o_d_i_1_1_g_a_m_e_1_1_i_configuration_wizard.html#aabd82a9746e5b0665ccd44ed94afd736",
"d0/d4e/class_k_o_d_i_1_1_w_i_n_d_o_w_i_n_g_1_1_c_o_s_screen_saver_manager.html#a4d840a2074fafd7bb90c0c45dabe1f81",
"d0/d5d/class_c_media_codec_video_buffer.html#a5b04be31d348f9b5e9072f3bff3e8dfa",
"d0/d72/_job_8h.html#ab16697665ee7e98c49e5dadd5e2cd016",
"d0/d7c/class_x_f_i_l_e_1_1_c_r_s_s_directory.html#ae28ab345c5ad4c033cd7c349e3d05b75",
"d0/d7f/class_m_u_s_i_c___i_n_f_o_1_1_c_music_info_tag.html#a8c7e1eb49a8a405eb78d9790019e5352",
"d0/d80/class_p_e_r_i_p_h_e_r_a_l_s_1_1_c_peripherals.html#adcbd87ccef711633bb5286443eae3c52",
"d0/d99/class_k_o_d_i_1_1_r_e_t_r_o_1_1_c_r_p_render_manager.html#a0315c63d2c38930e6415d9ad5d906d60",
"d0/da1/_x_b_m_c__keysym_8h.html#ad8fee7c9d36f0b9630de13ebbcfabe0aa8873e99e0080484d3ed988b9b4e14811",
"d0/da4/_i_r_remote_8h.html#ad14cfedae84398dbce5618479b63d8ea",
"d0/db0/struct_s_actor_info.html#aa68ec20cc9485ec87d06c71d20676c5b",
"d0/dc4/class_c_d_v_d_audio_codec_android_media_codec.html#a2a5987653969a45e67632ce1a283fb6a",
"d0/dd8/class_c_d_v_d_overlay_codec_text.html#a54b4e504d850ae42179a96dbfec333fd",
"d0/de9/group__settings.html#ggadcbffe70d7418eb8c82d828a241d45e3a972e73b7a882d0802a4e3a16946a2f94",
"d0/df5/class_c_g_u_i_dialog_subtitles.html#a6bce4ea89b7d2c610494cf3c44c0f188",
"d1/d02/class_c_core_audio_device.html#ae9a1a98fa480baae9dbcf4f7c02f1306",
"d1/d1b/class_c_network_interface_linux.html#a4da587f4c561ae90968580de4dda2fa3",
"d1/d32/group__python__xbmcplugin.html#gad10f44171571c303357ff4ee326a4a45",
"d1/d45/class_a_d_d_o_n_1_1_c_skin_info.html#a265ca51f884f2f4ae3ae3aea76b18f28",
"d1/d49/class_c_win_system_rpi.html#aca0ccf39ab8136f0e9ea387b7c88d552",
"d1/d57/_g_u_i_dialog_c_m_s_settings_8cpp.html#a33960ec57ba71234fa4b2cbac8e6b783",
"d1/d6e/emu__dummy_8h.html",
"d1/d79/class_k_o_d_i_1_1_r_e_t_r_o_1_1_c_render_context.html#a4a1184d1a2edb0af663190d5c3369566",
"d1/d88/class_c_lang_info.html#a75a823fc059f8e6a84dbc94ab111409c",
"d1/d93/class_p_v_r_1_1_c_p_v_r_channel_info_timeout_job.html#a1bba41697502ea5fa75fa146665a65ef",
"d1/d9f/class_p_v_r_1_1_c_g_u_i_window_p_v_r_guide_base.html#a163a36d614166a56228f7976aaa5efd9",
"d1/dab/class_k_o_d_i_1_1_r_e_t_r_o_1_1_c_savestate_database.html#a8862131a536b95bfaa2b2a5a283f9558",
"d1/dba/xbmc__pvr__types_8h.html#a13841ca455933a42daf0ab20ea26895ba4e1fd5cabb8d7133f02e827827d37baa",
"d1/dca/_peripheral_bus_addon_8h.html#a67260b638b2749b9f88c6e0eeb6ae54e",
"d1/dd1/class_k_o_d_i_1_1_k_e_y_b_o_a_r_d_1_1_i_keyboard_driver_handler.html#a6937971ca1189f069cecd6a392ab9d15",
"d1/df2/structrt__msghdr.html#adc8be9ddec4c2b0d5a8047df74c5f145",
"d2/d0b/class_c_g_u_i_font_cache_impl.html#a96c40e548fdbbabfd920011f13a797e3",
"d2/d1a/class_a_d_d_o_n_1_1_c_binary_addon_extensions.html#a7ace6ad7ab55c0545b8bf0935538ea24",
"d2/d28/struct_active_a_e_1_1_c_active_a_e_1_1_sound_state.html#a6857b0c752c1fbe2fffd79fbcb12d8d8",
"d2/d2d/class_k_o_d_i_1_1_r_e_t_r_o_1_1_c_r_p_renderer_open_g_l.html#a61feaffdff5a8c11777c01f30e0dce93",
"d2/d3e/class_p_v_r_1_1_c_p_v_r_radio_r_d_s_info_tag.html#a2c7248dbc2ad6a58864fb0f6ed603d29",
"d2/d47/struct_kodi_to_addon_func_table___v_f_s_entry.html#ae1c24e99da9d8eedacab4eb24bd20110",
"d2/d58/class_k_o_d_i_1_1_g_u_i_l_i_b_1_1_g_u_i_i_n_f_o_1_1_c_g_u_i_info_providers.html#ad258e49c9f3d7df280aa7a48943faa50",
"d2/d63/class_c_key.html#a0a0423137b9127be086cd8d24d2a2534ad3e35ff144fada0db8377d2fb3c0ff5c",
"d2/d68/_test_u_r_i_utils_8cpp.html#ae74b5e570c158663c01c8319e9dd0de7",
"d2/d75/class_c_helper__lib_k_o_d_i__guilib.html#a06102be4faaf9b0996a47f58aca60422",
"d2/d84/struct_c_scraper_url_1_1_s_url_entry.html#abd0a00f81025d78716e34d616de3d63b",
"d2/d9b/class_a_d_d_o_n_1_1_c_v_f_s_addon_cache.html",
"d2/da9/class_p_v_r_1_1_async_recording_action.html",
"d2/db3/class_v_a_a_p_i_1_1_c_v_a_a_p_i_context.html#ab5336fb9c6de5fb06a51d25c80084e93",
"d2/dc7/class_p_e_r_i_p_h_e_r_a_l_s_1_1_c_g_u_i_dialog_peripheral_settings.html#a536937941a3786612471d6119f321bea",
"d2/dd0/class_c_g_u_i_window.html#a26806f8500f6fd3d24a7b61f19bf510c",
"d2/dd8/class_c_g_u_i_dialog_text_viewer.html#a7a509b8f87cf7a5a240c0aacdef6e3a0",
"d2/df8/class_k_o_d_i_1_1_w_i_n_d_o_w_i_n_g_1_1_w_a_y_l_a_n_d_1_1_i_window_decoration_handler.html#acf25105ef77353545739b48326641474",
"d3/d0f/classdbiplus_1_1field__value.html#a132e597b8009397e589c2172c243d10f",
"d3/d17/class_active_a_e_1_1_c_active_a_e_buffer_pool_resample.html#abb0df97a79218a2d85ed4dfb9119fac6",
"d3/d24/class_kodi_a_p_i_1_1_g_u_i_1_1_c_g_u_i_addon_window.html#a591ff2001d46d3d2cfdd4a2688cc2993",
"d3/d32/class_c_g_u_i_dialog_gamepad.html#a24bebe30a47457e49a8ae5ba2d03b3f6",
"d3/d4b/class_i_n_f_o_1_1_info_bool.html#a93529dcc36ecaa63aa96ef1de7f0218f",
"d3/d50/classdbiplus_1_1_database.html#a26ee88926acda37c5243cf00db735d86",
"d3/d57/_music_database_8cpp.html#a53deca191cc37567a97e01772c473990",
"d3/d6e/class_k_o_d_i_1_1_w_i_n_d_o_w_i_n_g_1_1_l_i_n_u_x_1_1_c_o_s_screen_saver_freedesktop.html#ad8e06c081559befd9947bff8de46e946",
"d3/d7b/struct_k_o_d_i_1_1_j_o_y_s_t_i_c_k_1_1_keymap_action.html#a0bea43d6e505a4f17536d453158df2c4",
"d3/d92/class_shaders_1_1_base_y_u_v2_r_g_b_g_l_s_l_shader.html#a1f8bf432dd529947db92f8e4ffa4c5d7",
"d3/da0/dvdnav_8h.html#a0095545056c34063235c1a4ec955ef45",
"d3/daf/_h_t_t_p_webinterface_addons_handler_8h.html",
"d3/dc4/classkodi_1_1addon_1_1_c_addon_base.html#a98e43b50047da77514ba79fe0cc6bc4b",
"d3/dd4/class_k_o_d_i_1_1_g_a_m_e_1_1_c_controller_port_node.html#a4078a66e81aac30cd336fdd8e53008e1",
"d3/de7/_stream_info_8h.html#a9717f7fa246985f91fe7fe4d5f30dcf9a8e96519d13e74eaf48d9a1e090d9ec5b",
"d3/dfa/_a_e_channel_data_8h.html#a4d3a0d553f8937db4af3507659630c20a50818f59d97e330aff582af8206c1a39",
"d4/d07/class_p_v_r_1_1_c_p_v_r_timer_type.html#ab4846d483811488390d12605e64b01f0",
"d4/d1c/class_m_u_s_i_c___i_n_f_o_1_1_tag_lib_v_f_s_stream.html#ac65fe6a661a4e1ba3f96c8f47b528377",
"d4/d2e/class_c_d_v_d_demux_c_c.html#a5e7b04daf7be637213e0622aba919177",
"d4/d46/class_c_d_r_m_p_r_i_m_e_texture.html#a326cf48f3b2d3b222a27f0ec36d72927",
"d4/d5a/class_c_g_p_u_m_e_m.html#ab23a48d0df0dcc7ea6f553bf813576b5",
"d4/d6a/class_k_o_d_i_1_1_g_a_m_e_1_1_c_dialog_game_video_select.html#a54df22f495077122d1a3dbedfe3d69e6",
"d4/d8a/cc__decoder_8h.html#a01312cb04661907eb7e4329a7de4c89c",
"d4/d9b/class_k_o_d_i_1_1_r_e_t_r_o_1_1_i_savestate.html#aed6bcf5d2cf0707858701f5d08b97d23",
"d4/db1/_seat_input_processing_8h.html#a35fc19f8b4796c8cfeb37aa90accfbaea2b40a1ea27beb450618885ec87f0ee15",
"d4/dc3/class_p_v_r_1_1_c_g_u_i_e_p_g_grid_container_model.html#a326bc4e8b1e15004424b426f247795ac",
"d4/dd3/_g_u_i_dialog_p_v_r_recording_settings_8h.html",
"d4/de6/_utf8_utils_8h.html",
"d4/dfb/_o_m_x_audio_8h.html#a7e83887d17512b8be68a768c4eff7630",
"d5/d05/struct_a_t_t_r_i_b_u_t_e___p_a_c_k_e_d.html#a36e3a4725c332764ca93bbd76e0c49d3",
"d5/d05/struct_a_t_t_r_i_b_u_t_e___p_a_c_k_e_d.html#aeb2e8e3b39134eebd6bbf162bd4c918f",
"d5/d1d/class_o_m_x_player_audio.html#a375b19594960887e0676243b91480a3b",
"d5/d2d/_inertial_scrolling_handler_8cpp.html",
"d5/d38/class_x_b_m_c_addon_1_1_addon_class_1_1_ref.html#a5226016b1245515165509f4ecffe844e",
"d5/d43/class_c_input_stream_p_v_r_recording.html#aa291915dc2f2999f2462f574e88b0e61",
"d5/d55/structdvd__state__t.html#abb1c3cd87e02f5f4ca1e37ef877c6b06",
"d5/d72/_database_utils_8h.html#a1e35064f4b70226adc63b8fe1af7ddf8a9639d223ec64c658d5ba243655b4f52d",
"d5/d7d/class_i_d3_d_resource.html#a37b2e1d6b69a7a8043b0e07bf80277cb",
"d5/d8b/class_k_o_d_i_1_1_g_a_m_e_1_1_c_game_client_streams.html#a156ea9b4d66b68ed0f4a8f9e8ce78fe9",
"d5/dab/class_c_data_cache_core.html#a423241ef59e759a5ab1b7172784db61e",
"d5/dc2/struct_h_t_t_p_python_request.html#a9b2ca669b6616b1d18bc20b6d13ac51c",
"d5/dda/class_p_v_r_1_1_c_g_u_i_window_p_v_r_t_v_guide.html",
"d5/dec/class_c_seek_handler.html#aa4c5be970f2f377d3939f0be0395fba8",
"d6/d01/class_x_b_m_c_addon_1_1_alternative.html#a4080d5de5a54a69da8ade5d7c0900df5",
"d6/d06/class_c_input_manager.html#a7f7738a24b3a1e6bf349ac5bbb51d27d",
"d6/d08/class_active_a_e_1_1_c_active_a_e_stream.html#ad99b4f4f444fda0c94c5ee8828ecce53",
"d6/d16/class_x_b_m_c_addon_1_1_tuple_3_01_t1_00_01_t2_00_01_t3_00_01tuple__null__type_00_01tuple__null__type_01_4.html#a157940e00a50b6f9ee60d50d6969c583",
"d6/d2d/class_k_o_d_i_1_1_k_e_y_b_o_a_r_d_1_1_c_keyboard_input_handling.html#a33473861e1de018a64cb68fd622da6db",
"d6/d3c/class_c_d_v_d_demux.html#acfbfd70fdce1758aa575354927e83dad",
"d6/d4d/class_p_v_r_1_1_c_p_v_r_epg_info_tag.html#acc57608e601f6d4803dcf136b69e439b",
"d6/d63/class_c_network_interface_win32.html#af19c0f669eb5d33071d5cad259f2deb4",
"d6/d6b/struct_p_v_r___s_i_g_n_a_l___s_t_a_t_u_s.html#af7397fb5d0ba2c022049b9278e0b96e9",
"d6/d78/class_addon_database_test.html#ad794cced8ab25dd35d3acdc5bae4214e",
"d6/d81/class_c_x_rand_r.html#a482bb08f7c4c862f659b9596b73d0131",
"d6/d92/class_k_o_d_i_1_1_i_signal_handler_data.html#af97a40c5e8e21970f5222faaa6dc1a82",
"d6/da3/_j_n_i_x_b_m_c_json_handler_8cpp.html",
"d6/dc2/class_p_v_r_1_1_async_delete_recording.html",
"d6/ddd/class_c_setting_list.html#ab61b7267e0b62de66442b63622df3354",
"d6/de7/dvd__types_8h.html#af4924c4b819a7c74f6bb0d516d112360",
"d6/df6/class_c_password_manager.html",
"d7/d00/_g_b_m_utils_8cpp.html",
"d7/d0e/class_a_d_d_o_n_1_1_c_addon_mgr.html#aa3e2828e29ddc0f607dcd44950635892",
"d7/d18/class_a_d_d_o_n_1_1_c_addon.html#a17b9f9dfe640c5ab59773b36da62c76d",
"d7/d27/class_i_hardware_decoder.html",
"d7/d44/class_c_d_bus_connection.html",
"d7/d4c/_controller_definitions_8h.html#a911ad55558d893afa26c6698025b5abb",
"d7/d58/_x_b_m_c__vkeys_8h.html#aaa0eebc2574d301d8c94de72f248868da1942682de6a96edbd44f75e883c39803",
"d7/d62/class_c_media_codec_video_buffer_pool.html#afbea65a7d8c1cf5080427492a52c646f",
"d7/d82/class_p_v_r_1_1_c_p_v_r_g_u_i_info.html#a86ba22eef82cd54fa58380306782a326",
"d7/d96/classdetail_1_1_i_subscription.html#ad92b8983f6fd188c2f010db3f71abf75",
"d7/daf/_addon_events_8h.html",
"d7/dbb/_dirty_region_tracker_8h.html#a16a9dbb86cbfffb47bcd0d9791a47646",
"d7/dc9/_d_v_d_video_codec_8h.html#a503a287af057a7385616b51f10019340",
"d7/dd2/class_i_touch_input_handling.html#aa6a034470b202a14949f4b276778ba07",
"d7/dde/class_p_v_r_1_1_c_p_v_r_g_u_i_times_info.html#acc825aa8e8ab5fc8b7a3a83161056f27",
"d7/deb/class_c_music_database.html#a19d842ffa440b5514413c14582468782",
"d7/df3/class_k_o_d_i_1_1_w_i_n_d_o_w_i_n_g_1_1_w_a_y_l_a_n_d_1_1_i_shell_surface.html#a2aa7a6f6fa738c17c82bb68fb34992b3a471912282ffcf53e0eef0c344e4473cf",
"d7/dfd/class_c_archive.html#a1a127dc60955b88cf2ace2e10254707a",
"d8/d05/class_c_d_v_d_overlay_codec.html#acd556729e3d07383f018ab48995a1440",
"d8/d17/class_k_o_d_i_1_1_c_signal_handler_list.html#a9537dedd69cf46cae8e543cda824a988",
"d8/d1b/class_c_d_v_d_input_stream.html#ae3de594a83b9476640d2acc455b36cfd",
"d8/d26/namespace_x_b_m_c_addon_1_1xbmc.html#ae296508094d9fad7d94d3cd830471d16",
"d8/d2a/class_dll_addon_interface.html#a3047cfcad4f8229672826f1e80d69891",
"d8/d38/class_k_o_d_i_1_1_g_a_m_e_1_1_c_controller_feature.html#a772ed21c27971fea258cea98aab7245c",
"d8/d43/class_a_d_d_o_n_1_1_c_plugin_source.html#a475da8428dee6c12885dbba21588005ea8657a0a4f78790b0f1bd224fdb483efd",
"d8/d55/class_m_m_a_l_1_1_c_m_m_a_l_pool.html#a4d88e47d7145311bfb66a39c810a231d",
"d8/d65/namespace_l_o_c_k___l_e_v_e_l.html#a93d5d6b51b9f6d7524f3f46c38fd9de4",
"d8/d74/_texture_bundle_8cpp.html",
"d8/d7a/class_c_video_database.html#a7e3a6fd486b15619da1ad84391532738",
"d8/d7b/class_x_f_i_l_e_1_1_c_curl_file.html#ab9e36d4a7c2f9cb727ee18e59ace83a9",
"d8/d83/namespace_a_d_d_o_n.html#ac5069037ce4f1d3a497dc8ff2e97d998aed4d6c87a2cb7acad8281c35330865dd",
"d8/d8c/class_p_v_r_1_1_c_p_v_r_recording.html#ae0e960ad2f5875dc1e1f8713aef45b4f",
"d8/da4/class_c_video_player.html#a17f5bdf5a6b4f54bc168567bfa02c0e5",
"d8/da6/_retro_player_stream_types_8h.html#a83efb95c1c6662362bf4e6ddb0a83745ad94590df73d6073e81673364cfd9a1cd",
"d8/dbb/_d_x_v_a_8cpp.html",
"d8/dc5/class_active_a_e_1_1_c_active_a_e_resample_f_f_m_p_e_g.html",
"d8/ddd/class_v_d_p_a_u_1_1_c_mixer.html#ae98b690b656bfd5e4c94a567c6fd2087",
"d8/de9/kodi__game__types_8h.html#af52d501cc2ba9de915c80313887b2a87a8e267e3914828680a021da1ed95782da",
"d8/df6/class_active_a_e_1_1_c_active_a_e.html#a8b1b5c9bef1305edadfaadb9ec4e5201",
"d9/d02/class_c_win_system_i_o_s.html#a12e97a1d6ccd184126b0ecda03e627b3",
"d9/d10/class_c_linux_renderer_g_l_e_s.html#ad12f69811244de1ff4c783272003ddef",
"d9/d1c/_video_database_8h.html#a519749b8111ae6286da1ae7cc36ed921ab41bb88e446c80c0379dc889311aa940",
"d9/d24/class_c_setting_control_list.html#afc220115233fd833c7ba9cb07cf81745",
"d9/d2e/group__kodi__key__action__ids.html#ga3bea1d6cddcb2adf939f1123b2291f64",
"d9/d2e/group__kodi__key__action__ids.html#gace8afb867a7459638ae7da04539f84f9",
"d9/d3b/versions_8h.html#afdf661e2ec8761b3d9bf011903a41775",
"d9/d4f/class_c_g_u_i_control.html#a412e5b46897d7b7d8357e3f3d0b1029a",
"d9/d56/structsps__info__struct.html#adf9bad5fabdd1ef7a6d4d886b37dba1f",
"d9/d67/emu__msvcrt_8h.html#a9c9edfe27f7f5af89a48c9a9cca8e443",
"d9/d84/class_c_android_storage_provider.html#a4383a2c0f098845ac75942eff04ac394",
"d9/d90/_window_i_ds_8h.html#a9e5094cd5860cd028d8bacf187273eb6",
"d9/d9c/dvdnav__internal_8h.html#a164082210fd105ef9110852fc8229ab9",
"d9/da5/class_k_o_d_i_1_1_g_a_m_e_1_1_c_game_settings.html#aae4c31e70ae5e1294500dc4ff8b5850d",
"d9/dba/class_observable.html#a4f8b67fbaead397b8a3caddb2dc3a1e2",
"d9/dc3/class_c_g_u_i_spin_control_ex.html#a53a05721ba875f27c318d4c1d9d45f22",
"d9/dcb/class_p_v_r_1_1_c_p_v_r_channel.html#ad1a933fc27747f44ed590a24220e30a9",
"d9/de1/_texture_formats_8h.html#a4c05b8f37b42f5d4aa9a1c3e5eb5ff00",
"d9/df6/_a_e_sink_d_a_r_w_i_n_i_o_s_8mm.html",
"da/d09/class_k_o_d_i_1_1_r_e_t_r_o_1_1_c_g_u_i_render_full_screen.html#a1e63396893c0fb59b62984bbe83c9735",
"da/d1e/_web_socket_8h.html#a84047dc3e004de841d87c90be9dcd0f0af12994c5f5b1d71b9d4f47eef53b8628",
"da/d25/_video_player_radio_r_d_s_8cpp.html#a982486d9284d9b530fd5ec4113c0d733",
"da/d30/group__python__xbmcgui__control__list.html#gaa3b8a4758b7516f2be465a3fbd5af910",
"da/d48/class_c_addon_g_u_i_progress_control.html#a1d210df9551c03e403a45f7b661f1cdc",
"da/d52/addons_2kodi-addon-dev-kit_2include_2kodi_2addon-instance_2_peripheral_8h.html#adea74301a58d618c08413dc43c86a95fa1436159ebbc465d1a040f9c15274c643",
"da/d5d/class_a_d_d_o_n_1_1_c_binary_addon_base.html#a48f35c204ced52166e56269aba3b37ba",
"da/d6a/class_m_u_s_i_c___i_n_f_o_1_1_c_music_info_scanner.html#a90701db5a3143f4c482edffcce50c7ad",
"da/d7c/struct_i_d_v_d_resource_counted.html#a55f8f52108c338a5e4cff69815075908",
"da/d95/class_a_d_d_o_n_1_1_c_image_decoder.html#a24810984d2a851a4264913da04069e10",
"da/d9c/class_x_b_m_c_addon_1_1_tuple_3_01_t1_00_01_t2_00_01_t3_00_01_t4_00_01tuple__null__type_01_4.html#a7f59f3770f7ef42d5058e2816e7301c4",
"da/dae/_d_v_d_overlay_codec_8h.html#a5872d84c4983e56088ac694632192ccd",
"da/db4/class_k_o_d_i_1_1_m_e_s_s_a_g_i_n_g_1_1_c_application_messenger.html#af6b93a0217e20969e1677dc4c105b64f",
"da/dc8/class_c_setting_action.html#a2b71a435020e8bf78571b3fcd0a153bc",
"da/dd7/class_c_video_info_tag.html#a801464a7b9471b70b5d2cc3f2a38d8c7",
"da/ddf/class_c_setting_control_edit.html#a6b837645d3c44c109a8ef5592dd7457c",
"da/de9/class_p_v_r_1_1_c_p_v_r_timer_info_tag.html#ae165e2bd522710ce30cfb441c960d30f",
"da/deb/struct_kodi_a_p_i_1_1_g_u_i_1_1_c_b___g_u_i_lib.html#adf5432d3fe74c95c15a557b69cbe5b50",
"da/df6/classdbiplus_1_1_dataset.html#a7bce36e2854c1eceb85c659fc4c03f47",
"da/dff/_zeroconf_8cpp.html",
"db/d15/struct_packed_vertex.html#ad189dd28fb192423a02dd7b0aa580bca",
"db/d2e/class_c_graphic_context.html#abca5f71a3863231c452231a02b7e34fc",
"db/d33/class_n_p_t___xbmc_file_stream.html#a4aefec48d2505dd4aad953f510c50ddc",
"db/d4a/class_p_e_r_i_p_h_e_r_a_l_s_1_1_i_event_poll_callback.html",
"db/d5b/classkodi_1_1addon_1_1_c_instance_video_codec.html#ab84ed0dec9a80c78f7578a769f9dc86d",
"db/d74/class_test_addon_version.html#a1811eb872001c9414eed0f483b1dd759",
"db/d95/class_c_e_g_l_context_utils.html#a9a015fe145f68283aa3634274d396db0",
"db/d9f/emu__msvcrt_8cpp.html#abcc859b2aa2a13fa97852b8b41b3bf2b",
"db/dab/cc__decoder708_8h.html#a23b3db6441f230ed9abfde4114f6406da07f711726e990fdb867ba060fa826e6d",
"db/dbd/class_dll_dvd_nav_interface.html#a3108ca1a2af6016075cc567a33c19084",
"db/dc5/class_c_keyboard_stat.html#aedccac73f626839b23727b51e165a0b5",
"db/dd3/dataset_8h.html#a1df56315558cc0d9879d349db7e0f11e",
"db/ddd/class_c_d_v_d_input_stream_navigator.html#a9bce9eedad1eca9d5db65211d9f882a0",
"db/df2/_g_u_i_info_labels_8h.html#a00a97b27adb646093b327c141696d38d",
"db/df2/_g_u_i_info_labels_8h.html#a4ff4c260d9ee3803ac5eaf2183141078",
"db/df2/_g_u_i_info_labels_8h.html#aa3e73e828c9e5b4b5506340d1dc7a0fc",
"db/df2/_g_u_i_info_labels_8h.html#ae80d9d9de4c53a7057b33acba5baa78b",
"db/df9/class_c_texture_info.html",
"dc/d01/class_v_d_p_a_u_1_1_c_v_d_p_a_u_context.html#a16a6ab4fc27d41b98d84de0e86411145",
"dc/d0e/class_c_g_u_i_dialog_select.html#a0c9e492690cb5ca9eece3373d6e2b391",
"dc/d1f/class_c_zeroconf_browser_android_resolve.html#ae23121bdd3c1c7e904cb3330c59e22e4",
"dc/d3f/class_c_mime.html#a89d3bd9a5ac6e5dbe5aa35a2371887fba906f4fa5da0bb6f6a441df727006aa8c",
"dc/d54/classkodi_1_1addon_1_1_peripheral.html#a3db7020acce93ac2f3beb000e91c172b",
"dc/d66/class_p_v_r_1_1_c_p_v_r_client.html#a80e1b027bfb209143aefa5fc044f5f08",
"dc/d73/ilog_8h.html#a58d867eae09859aa2395bb13c466989a",
"dc/d89/struct_v_d_p_a_u_1_1_c_vdpau_config.html#aea5f805d72b3450b691c27a342fc195e",
"dc/da1/class_c_video_sync_g_l_x.html#a57ffd2a8ed5b2f6728317ef90bd9642f",
"dc/dc1/class_c_g_u_i_control_group_list.html#a1aaa07bc1840908d4079b7d24c939c0a",
"dc/dd3/class_c_d_v_d_demux_f_fmpeg.html#a64bc5c9076b6b83cd41e1600b3baf42a",
"dc/ded/classkodi_1_1addon_1_1_c_instance_input_stream.html#a5142e619ef689c4451a1d55db1a29abc",
"dc/dfe/struct_kodi_to_addon_func_table___video_codec.html#ad65187408f730660f424e238f383fac2",
"dd/d10/group__cpp__kodi__gui__controls___c_settings_slider.html#gace9743d3c82b531774ce139d7b31d06b",
"dd/d21/class_v_a_a_p_i_1_1_c_output.html#acf0f1f1924b7d429310bd3fd113f5965",
"dd/d2d/class_m_m_a_l_1_1_c_m_m_a_l_renderer.html#a49eca2b61e6870fa596ac515672bf463",
"dd/d3a/class_o_v_e_r_l_a_y_1_1_c_overlay.html#ae80b853e706397dfefaf28994341d321",
"dd/d4e/class_k_o_d_i_1_1_g_u_i_l_i_b_1_1_g_u_i_i_n_f_o_1_1_c_g_u_i_controls_g_u_i_info.html#a48d1538a5c32fe365f1e904b0ec15611",
"dd/d62/_x_b_m_c_controller_8mm.html",
"dd/d81/class_xbmc_threads_1_1_c_event_group.html#a1c176687d39671c5e8348cebc0bc40cb",
"dd/d8a/class_a_d_d_o_n_1_1_c_helper__lib_x_b_m_c__addon.html#af49f22eb6234407ed98e971b6caa12d1",
"dd/d93/class_c_d_v_d_input_stream_bluray.html#a796787c54195e5479b740460c06837ef",
"dd/da3/class_c_d_v_d_teletext_tools.html",
"dd/dbd/class_c_render_buffer.html#a0c42bfbd8cac5779b6291e99009780e0",
"dd/dd6/struct_v_c___i_m_a_g_e___t.html#a77559ff49b6ee92aa6a28bf42dabc6fb",
"dd/de9/class_c_media_manager.html#a1930dd43a80b6534bde0f94cc44cfe20",
"dd/df5/_render_system_g_l_8h.html#a80ce68f1beca25ef9c73942546d96516ad4ec2d52995962de795d82265bb0b014",
"de/d08/class_j_s_o_n_r_p_c_1_1_c_texture_operations.html",
"de/d18/_c_p_u_info_8h.html#a3e950542b544bb1969efe6e5ae471b48",
"de/d22/class_p_v_r_1_1_c_g_u_i_e_p_g_grid_container.html#ab616c2e1a31efd99d777b621c8e539af",
"de/d34/struct_a_d_d_o_n_1_1_c_v_f_s_entry_1_1_protocol_info.html#a4bd1b2a7049f3813a63bc21c97a4f013",
"de/d4f/class_c_thumb_loader.html",
"de/d57/class_x_b_m_c_addon_1_1_language_hook.html#aafc2c53cfa9436e3162f95a3f64b6c92",
"de/d71/_peripheral_bus_u_s_b_lib_udev_8cpp.html#adf8c8c8eaec8c46ca9e7203b776e0c78",
"de/d83/class_k_o_d_i_1_1_r_e_t_r_o_1_1_c_g_u_i_game_settings.html#aa70bebf22554176f35d858d96e0380e8",
"de/d90/class_s_o_c_k_e_t_s_1_1_c_base_socket.html#aa4d878721c9314c66fcfe4aa2dfd78d1",
"de/d9b/_i_directory_8h.html#a0f6c32074fa62d9960e7d65fcd689113a95f516d375073a562af32da43d9d506e",
"de/daa/class_k_o_d_i_1_1_r_e_t_r_o_1_1_c_base_render_buffer.html#ad9d402c75c3f9768b789286a733998f0",
"de/dc7/class_k_o_d_i_1_1_j_o_y_s_t_i_c_k_1_1_c_wheel.html#a252d42a1e7011cbabfd7fccb268525d4",
"de/dd9/class_i_setting_callback.html#a8b226f7efe7b7c86ed70c4d21d0c7e28",
"de/def/class_k_o_d_i_1_1_g_u_i_l_i_b_1_1_g_u_i_i_n_f_o_1_1_c_games_g_u_i_info.html#adc11a7cc3f02fd4e7dcec823308bc209",
"df/d01/class_v_a_a_p_i_1_1_c_vpp_postproc.html#ade524a97481b49eeae8319360b728f1e",
"df/d13/class_c_application.html#a8c2233117f913d80e1af25539a927b2f",
"df/d1a/class_c_inertial_scrolling_handler.html#a0f58c56f94d45e31b9fe0821adbab493",
"df/d2b/class_c_advanced_settings.html#a2693d0fc82b9eb2407166f3a2ebe04ef",
"df/d32/_u_disks2_provider_8cpp.html#af98752bae2e7e20d2e76ec717dc9fa0d",
"df/d3f/class_k_o_d_i_1_1_w_i_n_d_o_w_i_n_g_1_1_g_b_m_1_1_c_vaapi_proxy.html",
"df/d50/class_k_o_d_i_1_1_w_i_n_d_o_w_i_n_g_1_1_w_a_y_l_a_n_d_1_1_c_win_system_wayland.html#a29b91e827df16b8ac5e932e784a4fa00",
"df/d65/dvd__reader_8h.html#a233e63ab576d25322c3711b4af985240a023f7275ab6dd771aaeb11fb450f98de",
"df/d75/class_p_v_r_1_1_c_p_v_r_epg_database.html#a502f2921bbd82107425d90d358ce903b",
"df/d79/class_c_file_item.html#aff241f23391a3b891f20c443c2342547",
"df/d8b/class_k_o_d_i_1_1_g_a_m_e_1_1_c_game_client_mouse.html#aef3fa40a792d10f256ee9db53f76ee18",
"df/d90/class_c_g_u_i_spin_control.html#adf3e0041a8672a00515ce843ae42040b",
"df/d9f/struct_python_module.html#a7318fb5d4a7348a4fbc3261e93cb606b",
"df/dbb/class_k_o_d_i_1_1_r_e_t_r_o_1_1_c_base_render_buffer_pool.html#af70076a8cbd52a4445ae81143083b8d5",
"df/dca/struct_mem_buffer.html#a7759df5380f06a527f2b86237e95240c",
"df/dda/_render_system_types_8h.html#a6dd4c4cfd5779480e3ad237d8eb8ae42ae6c38d9ad1ab9065da7d90c7c6a07e55",
"df/de5/_darwin_utils_8mm.html#a792d2ce24ef6457020e6ef2cdc9e6692a14271632603d3e0b51e750cc8f7a7626",
"df/ded/windowing_2wayland_2_util_8h.html",
"files.html",
"globals_type_h.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';