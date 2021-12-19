option(ENABLE_LDGOLD "Use GNU gold linker" ON)
if(ENABLE_LDGOLD)
  execute_process(COMMAND ${CMAKE_C_COMPILER} -fuse-ld=gold -Wl,--version ERROR_QUIET OUTPUT_VARIABLE LD_VERSION)
  if(LD_VERSION MATCHES "GNU gold")
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -fuse-ld=gold")
    set(CMAKE_SHARED_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -fuse-ld=gold")
    set(CMAKE_MODULE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -fuse-ld=gold")
    set(LDGOLD_FOUND TRUE)
    message(STATUS "Linker: GNU gold")
  else()
    message(WARNING "GNU gold linker is not available, falling back to default system linker")
  endif()
elseif(NOT ENABLE_LLD)
  message(STATUS "Linker: Default system linker")
endif()

set(DEFAULT_ENABLE_DEBUGFISSION FALSE)
if(CMAKE_BUILD_TYPE STREQUAL Debug OR
   CMAKE_BUILD_TYPE STREQUAL RelWithDebInfo AND
   LDGOLD_FOUND)
  set(DEFAULT_ENABLE_DEBUGFISSION TRUE)
endif()

include(CMakeDependentOption)
cmake_dependent_option(ENABLE_DEBUGFISSION "Enable Debug Fission support" ON
                       "DEFAULT_ENABLE_DEBUGFISSION" OFF)

set(DEBUGFISSION_FOUND FALSE)
if(ENABLE_DEBUGFISSION)
  include(TestCXXAcceptsFlag)
  check_cxx_accepts_flag(-gsplit-dwarf CXX_ACCEPTS_GSPLIT_DWARF)
  if(CXX_ACCEPTS_GSPLIT_DWARF)
    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -gsplit-dwarf")
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -gsplit-dwarf")
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -Wl,--gdb-index")
    set(CMAKE_SHARED_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -Wl,--gdb-index")
    set(CMAKE_MODULE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -Wl,--gdb-index")
    set(DEBUGFISSION_FOUND TRUE)
    message(STATUS "Debug Fission enabled")
  else()
    message(WARNING "Debug Fission is not available")
  endif()
endif()