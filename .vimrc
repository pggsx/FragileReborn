set nocompatible               " be iMproved
filetype off                   " required!

set rtp+=~/.vim/bundle/vundle/
call vundle#rc()
set nu
set tabstop=2
set showmatch
"set mouse=a
set tw=95
set nospell
syn enable
"colorscheme dalek
":setlocal spell spelllang=en_us
" let Vundle manage Vundle
" required! 
execute pathogen#infect()
filetype plugin on
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*
let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
Bundle 'gmarik/vundle'
Bundle 'scrooloose/nerdtree'
Bundle 'christoomey/vim-tmux-navigator'
Plugin 'AutomaticLaTeXPlugin'
Plugin 'LaTeX-error-filter'
"GNU-Coding Standards
setlocal cindent
setlocal cinoptions=>4,n-2,{2,^-2,:2,=2,g0,h2,p5,t0,+2,(0,u0,w1,m1
setlocal shiftwidth=2
setlocal softtabstop=2
setlocal textwidth=79
setlocal fo-=ro fo+=cql
filetype plugin indent on     " required!
set secure
