import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

export type LayoutState = {
  showSplash: boolean
  header: {
    containerWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
    visible: boolean
    style: 'fixed' | 'static' | 'sticky'
    bgColor: string
  }
  main: {
    containerWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    mode: 'boxed' | 'fluid'
  },
  sidebar: {
    visible: boolean
    folded: boolean
    widths: {
      expanded: number
      folded: number
    }
  }
  panels: {
    top: {
      visible: boolean
    },
    right: {
      visible: boolean
    },
    bottom: {
      visible: boolean
    },
    left: {
      visible: boolean
    },
  }
}

const initialState: LayoutState = {
  showSplash: false,
  header: {
    containerWidth: undefined,
    visible: true,
    style: 'fixed',
    bgColor: 'transparent'
  },
  main: {
    containerWidth: 'xl',
    mode: 'boxed'
  },
  sidebar: {
    visible: true,
    folded: false,
    widths: {
      folded: 80,
      expanded: 240
    },
  },
  panels: {
    top: {
      visible: false
    },
    bottom: {
      visible: false
    },
    right: {
      visible: false
    },
    left: {
      visible: false
    },
  }
}

export const layoutModel = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleBottomtPanel: (state) => {
      state.panels.bottom.visible = !state.panels.bottom.visible
    },
    toggleLeftPanel: (state) => {
      state.panels.left.visible = !state.panels.left.visible
    },
    toggleLeftSidebar: (state) => {
      state.sidebar.visible = !state.sidebar.visible
    },
    toggleLeftSidebarFold: (state) => {
      state.sidebar.folded = !state.sidebar.folded
    },
    toggleRightPanel: (state) => {
      state.panels.right.visible = !state.panels.right.visible
    },
    toggleTopPanel: (state) => {
      state.panels.top.visible = !state.panels.top.visible
    },
    setShowSplash: (state, action: PayloadAction<boolean>) => {
      state.showSplash = action.payload
    }
  },
})

export const {
  toggleBottomtPanel,
  toggleLeftPanel,
  toggleLeftSidebar,
  toggleLeftSidebarFold,
  toggleRightPanel,
  toggleTopPanel,
  setShowSplash
} = layoutModel.actions
export default layoutModel.reducer
