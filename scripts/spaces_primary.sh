#!/bin/sh

PATH=/usr/local/bin/:$PATH

# Check if yabai exists
if ! [ -x "$(command -v yabai)" ]; then
  echo "{\"error\":\"yabai binary not found\"}"
  exit 1
fi

SPACES_PRIMARY=$(yabai -m query --spaces --display 1)
WINDOWS=$(yabai -m query --windows)

echo $(cat <<-EOF
{
  "spaces_primary": $SPACES_PRIMARY,
  "windows": $WINDOWS
}
EOF
)
