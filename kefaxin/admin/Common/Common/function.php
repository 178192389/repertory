<?php
function cleanup_directory($dir) {//清除缓存文件
    if (is_dir($dir)) {
        $iter = new RecursiveDirectoryIterator($dir);
          foreach (new RecursiveIteratorIterator($iter, RecursiveIteratorIterator::CHILD_FIRST) as $f) {
            if ($f->isDir()) {
              @rmdir($f->getPathname());
            } else {
                echo '移除'.$f->getPathname();
                echo "成功<br>\n";
              @unlink($f->getPathname());
            }
          }
          @rmdir($dir);
        return true;
    }else{
        return false;
    }
}
?>