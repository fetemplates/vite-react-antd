export default interface IIconProps {
  icon:
    | 'Add-camera'
    | 'Swap'
    | 'loading-9'
    | 'tick-yellow'
    | 'tick-red'
    | 'tick-green'
    | 'tick'
    | 'Home1'
    | 'arrow-4-1'
    | 'form-error'
    | 'burger'
    | 'document'
    | 'Search'
    | 'rss-feed-3'
    | 'personal-1'
    | 'User'
    | 'User1'
    | 'Activity'
    | 'Add-User'
    | 'Buy'
    | 'Calendar'
    | 'Call'
    | 'Calling'
    | 'Camera'
    | 'Category'
    | 'Chart'
    | 'Chat'
    | 'Document'
    | 'Download'
    | 'Edit-Square'
    | 'Edit'
    | 'Folder'
    | 'Heart'
    | 'Hide'
    | 'Home'
    | 'Image-2'
    | 'Image'
    | 'Info-Circle'
    | 'Info-Square'
    | 'Location1'
    | 'Login1'
    | 'Logout1'
    | 'Message1'
    | 'More-Circle1'
    | 'More-Square1'
    | 'Notification1'
    | 'Paper-Download'
    | 'Paper-Upload'
    | 'Paper1'
    | 'Plus1'
    | 'Profile1'
    | 'Send1'
    | 'Setting1'
    | 'Show'
    | 'Tick-Square1'
    | 'Time-Circle1'
    | 'Time-Square1'
    | 'Unlock1'
    | 'Upload1'
    | 'Arrow---Down'
    | 'Arrow---Left'
    | 'Arrow---Right'
    | 'Arrow---Up'
    | 'chevron_big_down'
    | 'chevron_big_left-1'
    | 'chevron_big_left'
    | 'chevron_big_right-1'
    | 'chevron_big_right'
    | 'chevron_big_up'
    | 'close'
    | 'facebook'
    | 'fill'
    | 'filled-copy-2'
    | 'filled-copy-3'
    | 'filled-copy-4'
    | 'filled-copy'
    | 'filled'
    | 'Hide1'
    | 'linear-copy-2'
    | 'linear-copy-3'
    | 'linear-copy-4'
    | 'linear-copy-5'
    | 'linear-copy'
    | 'linear'
    | 'Link'
    | 'logout'
    | 'messenger'
    | 'twitter'
    | 'User2'
    | 'Location'
    | 'Lock'
    | 'Login'
    | 'Logout'
    | 'Message'
    | 'Notification'
    | 'Paper'
    | 'Plus'
    | 'Profile'
    | 'Send'
    | 'Setting'
    | 'Show1'
    | 'Tick-Square'
    | 'Time-Circle'
    | 'Time-Square'
    | 'Unlock'
    | 'Upload'
    | 'Wallet'
    | 'Work'
    | (string & Record<string, never>);
  color?: string;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
  [name: string]: any;
}
