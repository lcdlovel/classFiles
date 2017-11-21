<?php
  require("../init.php");
  echo sql_execute("SELECT img,href FROM xz_index_carousel");