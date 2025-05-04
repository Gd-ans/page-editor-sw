import { createSlice, current } from '@reduxjs/toolkit';

// Utility function to deeply update the data array
const updateItemInData = (data, selectedItem, newItem) => {
    // data.map(item => {
    console.log(data, "asfdsgf")
    // if (item === selectedItem) {
    //     return { ...newItem };
    // }
    // if (item.data && Array.isArray(item.data)) {
    //     return {
    //         ...item,
    //         data: updateItemInData(item.data, selectedItem, newItem)
    //     };
    // }
    // return item;
    // });
};

const pageBuilderSlice = createSlice({
    name: 'pageBuilder',
    initialState: {
        SelcetedItem: null,
        data: [
            {
                "appearenceType": "default",
                "containerWidth": "containerlg",
                "customWidth": false,
                "componentRender": "container",
                "container_name": "A2Z Guide",
                "style": {
                    "desktop": {
                        "backgroundColor": "#FAFAFA",
                        "height": "auto",
                        "background": "",
                        "width": "100",
                        "display": "flex",
                        "gridColumns": "1",
                        "backgroundType": "color",
                        "overlayColor": "0,0,0",
                        "overlayOpacity": 0,
                        "zIndex": "0",
                        "gap": "36px",
                        "position": {
                            "position": "relative",
                            "top": "0px",
                            "bottom": "0px",
                            "left": "0px",
                            "right": "0px"
                        },
                        "padding": {
                            "paddingTop": "24px",
                            "paddingRight": "24px",
                            "paddingBottom": "0",
                            "paddingLeft": "24px"
                        },
                        "backgroundImage": {
                            "url": "",
                            "backgroundPostion": "center",
                            "alt": "",
                            "backgroundSize": "cover"
                        },
                        "video": {
                            "url": "",
                            "autoPlay": "true",
                            "mute": "false",
                            "loop": "true",
                            "objectFit": "cover",
                            "objectPosition": "center"
                        }
                    },
                    "tablet": {
                        "backgroundColor": "#FAFAFA",
                        "height": "auto",
                        "background": "",
                        "width": 100,
                        "gridColumns": "1",
                        "backgroundType": "",
                        "overlayColor": "0,0,0",
                        "overlayOpacity": 0,
                        "zIndex": "0",
                        "position": {
                            "position": "relative",
                            "top": "0px",
                            "bottom": "0px",
                            "left": "0px",
                            "right": "0px"
                        },
                        "padding": {
                            "paddingTop": "24px",
                            "paddingRight": "24px",
                            "paddingBottom": "24px",
                            "paddingLeft": "24px"
                        }
                    },
                    "mobile": {
                        "backgroundColor": "#FAFAFA",
                        "height": "auto",
                        "background": "",
                        "width": 100,
                        "gridColumns": "1",
                        "backgroundType": "",
                        "overlayColor": "0,0,0",
                        "overlayOpacity": 0,
                        "zIndex": "0",
                        "position": {
                            "position": "relative",
                            "top": "0px",
                            "bottom": "0px",
                            "left": "0px",
                            "right": "0px"
                        },
                        "padding": {
                            "paddingTop": "24px",
                            "paddingRight": "24px",
                            "paddingBottom": "24px",
                            "paddingLeft": "24px"
                        }
                    }
                },
                "data": [
                    {
                        "componentRender": "subContainer",
                        "backgroundType": "color",
                        "style": {
                            "desktop": {
                                "padding": {
                                    "paddingTop": "0px",
                                    "paddingRight": "0px",
                                    "paddingBottom": "0px",
                                    "paddingLeft": "0px"
                                },
                                "backgroundColor": "",
                                "display": "flex",
                                "flexdirection": "row",
                                "gridColumns": "1",
                                "height": "auto",
                                "width": "100%",
                                "background": "",
                                "position": {
                                    "position": "relative",
                                    "top": "0px",
                                    "bottom": "0px",
                                    "left": "0px",
                                    "right": "0px"
                                },
                                "margin": {
                                    "marginTop": "",
                                    "marginRight": "",
                                    "marginBottom": "",
                                    "marginLeft": ""
                                },
                                "gap": "36px"
                            },
                            "tablet": {
                                "padding": {
                                    "paddingTop": "0px",
                                    "paddingRight": "0px",
                                    "paddingBottom": "0px",
                                    "paddingLeft": "0px"
                                },
                                "backgroundColor": "",
                                "flexdirection": "row",
                                "gridColumns": "1",
                                "width": "100%",
                                "background": "",
                                "margin": {
                                    "marginTop": "",
                                    "marginRight": "",
                                    "marginBottom": "",
                                    "marginLeft": ""
                                },
                                "gap": "36px"
                            },
                            "mobile": {
                                "padding": {
                                    "paddingTop": "0px",
                                    "paddingRight": "0px",
                                    "paddingBottom": "0px",
                                    "paddingLeft": "0px"
                                },
                                "position": {
                                    "position": "relative",
                                    "top": "0px",
                                    "bottom": "0px",
                                    "left": "0px",
                                    "right": "0px"
                                },
                                "backgroundColor": "",
                                "background": "",
                                "flexdirection": "column",
                                "gridColumns": "1",
                                "width": "100%",
                                "margin": {
                                    "marginTop": "",
                                    "marginRight": "",
                                    "marginBottom": "",
                                    "marginLeft": ""
                                },
                                "gap": "24px"
                            }
                        },
                        "data": [
                            {
                                "componentRender": "Grid",
                                "style": {
                                    "desktop": {
                                        "padding": {
                                            "paddingTop": "18px",
                                            "paddingRight": "18px",
                                            "paddingBottom": "18px",
                                            "paddingLeft": "18px"
                                        },
                                        "background": "",
                                        "backgroundColor": "#EFF0F7",
                                        "display": "block",
                                        "flexdirection": "column",
                                        "gridColumns": "1",
                                        "height": "536px",
                                        "minWidth": "295px",
                                        "borderRadius": "15px",
                                        "margin": {
                                            "marginTop": "",
                                            "marginRight": "",
                                            "marginBottom": "",
                                            "marginLeft": ""
                                        }
                                    },
                                    "tablet": {
                                        "padding": {
                                            "paddingTop": "18px",
                                            "paddingRight": "18px",
                                            "paddingBottom": "18px",
                                            "paddingLeft": "18px"
                                        },
                                        "backgroundColor": "",
                                        "background": "#EFF0F7",
                                        "flexdirection": "column",
                                        "gridColumns": "1",
                                        "width": "295px",
                                        "borderRadius": "15px"
                                    },
                                    "mobile": {
                                        "padding": {
                                            "paddingTop": "18px",
                                            "paddingRight": "18px",
                                            "paddingBottom": "18px",
                                            "paddingLeft": "18px"
                                        },
                                        "position": {
                                            "position": "relative",
                                            "top": "0px",
                                            "bottom": "0px",
                                            "left": "0px",
                                            "right": "0px"
                                        },
                                        "background": "#EFF0F7",
                                        "backgroundColor": "",
                                        "flexdirection": "column",
                                        "gridColumns": "1",
                                        "width": "100%",
                                        "borderRadius": "15px"
                                    }
                                },
                                "data": [
                                    {
                                        "type": "paragraph",
                                        "data": [
                                            {
                                                "type": "alignLeft",
                                                "children": [
                                                    {
                                                        "type": "p",
                                                        "children": [
                                                            {
                                                                "text": "Recommended Topics",
                                                                "lineHeight": "normal"
                                                            }
                                                        ],
                                                        "style": {
                                                            "desktop": {
                                                                "fontStyle": "",
                                                                "color": "#1B202A",
                                                                "fontFamily": "",
                                                                "fontSize": "16px",
                                                                "fontWeight": "700",
                                                                "lineHeight": "normal",
                                                                "paddingBottom": "8px",
                                                                "marginBottom": "16px",
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginBottom": "",
                                                                    "marginRight": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": "1px solid #D9D9D9"
                                                            },
                                                            "tablet": {
                                                                "color": "",
                                                                "fontSize": "",
                                                                "fontWeight": "",
                                                                "lineHeight": "",
                                                                "backgroundColor": "",
                                                                "textAlign": "",
                                                                "position": {
                                                                    "position": "",
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            },
                                                            "mobile": {
                                                                "color": "",
                                                                "fontsize": "",
                                                                "fontweight": "",
                                                                "lineheight": "",
                                                                "backgroundcolor": "",
                                                                "textalign": "",
                                                                "position": {
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "paragraph",
                                        "data": [
                                            {
                                                "type": "alignLeft",
                                                "children": [
                                                    {
                                                        "type": "p",
                                                        "children": [
                                                            {
                                                                "text": "Clock In/Clock Out",
                                                                "lineHeight": "normal"
                                                            }
                                                        ],
                                                        "style": {
                                                            "desktop": {
                                                                "fontStyle": "",
                                                                "color": "#565656",
                                                                "fontFamily": "Nunito Sans",
                                                                "fontSize": "16px",
                                                                "fontWeight": "400",
                                                                "lineHeight": "normal",
                                                                "marginBottom": "8px",
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginBottom": "",
                                                                    "marginRight": "",
                                                                    "marginLeft": ""
                                                                }
                                                            },
                                                            "tablet": {
                                                                "color": "",
                                                                "fontSize": "",
                                                                "fontWeight": "",
                                                                "lineHeight": "",
                                                                "backgroundColor": "",
                                                                "textAlign": "",
                                                                "position": {
                                                                    "position": "",
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            },
                                                            "mobile": {
                                                                "color": "",
                                                                "fontsize": "",
                                                                "fontweight": "",
                                                                "lineheight": "",
                                                                "backgroundcolor": "",
                                                                "textalign": "",
                                                                "position": {
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "paragraph",
                                        "data": [
                                            {
                                                "type": "alignLeft",
                                                "children": [
                                                    {
                                                        "type": "p",
                                                        "children": [
                                                            {
                                                                "text": "Operations",
                                                                "lineHeight": "normal"
                                                            }
                                                        ],
                                                        "style": {
                                                            "desktop": {
                                                                "fontStyle": "",
                                                                "color": "#565656",
                                                                "fontFamily": "Nunito Sans",
                                                                "fontSize": "16px",
                                                                "fontWeight": "400",
                                                                "lineHeight": "normal",
                                                                "marginBottom": "8px",
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginBottom": "",
                                                                    "marginRight": "",
                                                                    "marginLeft": ""
                                                                }
                                                            },
                                                            "tablet": {
                                                                "color": "",
                                                                "fontSize": "",
                                                                "fontWeight": "",
                                                                "lineHeight": "",
                                                                "backgroundColor": "",
                                                                "textAlign": "",
                                                                "position": {
                                                                    "position": "",
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            },
                                                            "mobile": {
                                                                "color": "",
                                                                "fontsize": "",
                                                                "fontweight": "",
                                                                "lineheight": "",
                                                                "backgroundcolor": "",
                                                                "textalign": "",
                                                                "position": {
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "paragraph",
                                        "data": [
                                            {
                                                "type": "alignLeft",
                                                "children": [
                                                    {
                                                        "type": "p",
                                                        "children": [
                                                            {
                                                                "text": "Understanding Barcode Scanners: Best Practices",
                                                                "lineHeight": "normal"
                                                            }
                                                        ],
                                                        "style": {
                                                            "desktop": {
                                                                "fontStyle": "",
                                                                "color": "#565656",
                                                                "fontFamily": "Nunito Sans",
                                                                "fontSize": "16px",
                                                                "fontWeight": "400",
                                                                "lineHeight": "normal",
                                                                "marginBottom": "8px",
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginBottom": "",
                                                                    "marginRight": "",
                                                                    "marginLeft": ""
                                                                }
                                                            },
                                                            "tablet": {
                                                                "color": "",
                                                                "fontSize": "",
                                                                "fontWeight": "",
                                                                "lineHeight": "",
                                                                "backgroundColor": "",
                                                                "textAlign": "",
                                                                "position": {
                                                                    "position": "",
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            },
                                                            "mobile": {
                                                                "color": "",
                                                                "fontsize": "",
                                                                "fontweight": "",
                                                                "lineheight": "",
                                                                "backgroundcolor": "",
                                                                "textalign": "",
                                                                "position": {
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "paragraph",
                                        "data": [
                                            {
                                                "type": "alignLeft",
                                                "children": [
                                                    {
                                                        "type": "p",
                                                        "children": [
                                                            {
                                                                "text": "Ring Sales",
                                                                "lineHeight": "normal"
                                                            }
                                                        ],
                                                        "style": {
                                                            "desktop": {
                                                                "fontStyle": "",
                                                                "color": "#565656",
                                                                "fontFamily": "Nunito Sans",
                                                                "fontSize": "16px",
                                                                "fontWeight": "400",
                                                                "lineHeight": "normal",
                                                                "marginBottom": "8px",
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginBottom": "",
                                                                    "marginRight": "",
                                                                    "marginLeft": ""
                                                                }
                                                            },
                                                            "tablet": {
                                                                "color": "",
                                                                "fontSize": "",
                                                                "fontWeight": "",
                                                                "lineHeight": "",
                                                                "backgroundColor": "",
                                                                "textAlign": "",
                                                                "position": {
                                                                    "position": "",
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            },
                                                            "mobile": {
                                                                "color": "",
                                                                "fontsize": "",
                                                                "fontweight": "",
                                                                "lineheight": "",
                                                                "backgroundcolor": "",
                                                                "textalign": "",
                                                                "position": {
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "paragraph",
                                        "data": [
                                            {
                                                "type": "alignLeft",
                                                "children": [
                                                    {
                                                        "type": "p",
                                                        "children": [
                                                            {
                                                                "text": "Inventory",
                                                                "lineHeight": "normal"
                                                            }
                                                        ],
                                                        "style": {
                                                            "desktop": {
                                                                "fontStyle": "",
                                                                "color": "#565656",
                                                                "fontFamily": "Nunito Sans",
                                                                "fontSize": "16px",
                                                                "fontWeight": "400",
                                                                "lineHeight": "normal",
                                                                "marginBottom": "8px",
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginBottom": "",
                                                                    "marginRight": "",
                                                                    "marginLeft": ""
                                                                }
                                                            },
                                                            "tablet": {
                                                                "color": "",
                                                                "fontSize": "",
                                                                "fontWeight": "",
                                                                "lineHeight": "",
                                                                "backgroundColor": "",
                                                                "textAlign": "",
                                                                "position": {
                                                                    "position": "",
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            },
                                                            "mobile": {
                                                                "color": "",
                                                                "fontsize": "",
                                                                "fontweight": "",
                                                                "lineheight": "",
                                                                "backgroundcolor": "",
                                                                "textalign": "",
                                                                "position": {
                                                                    "top": "",
                                                                    "bottom": "",
                                                                    "left": "",
                                                                    "right": ""
                                                                },
                                                                "padding": {
                                                                    "paddingTop": "",
                                                                    "paddingRight": "",
                                                                    "paddingBottom": "",
                                                                    "paddingLeft": ""
                                                                },
                                                                "margin": {
                                                                    "marginTop": "",
                                                                    "marginRight": "",
                                                                    "marginBottom": "",
                                                                    "marginLeft": ""
                                                                },
                                                                "borderBottom": ""
                                                            }
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "componentRender": "Grid",
                                "style": {
                                    "desktop": {
                                        "flex": "1",
                                        "overflow": "hidden"
                                    },
                                    "tablet": {},
                                    "mobile": {}
                                },
                                "data": [
                                    {
                                        "componentRender": "contentWrap",
                                        "style": {
                                            "desktop": {
                                                "maxHeight": "calc(100vh - 124px)",
                                                "overflowY": "auto",
                                                "padding": {
                                                    "paddingTop": "0",
                                                    "paddingRight": "0",
                                                    "paddingBottom": "0",
                                                    "paddingLeft": "24px"
                                                }
                                            },
                                            "tablet": {},
                                            "mobile": {}
                                        },
                                        "custom__section": [
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "31px",
                                                                        "text": "Getting Started with A2Z POS: A Beginner's Guide"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "var(--global-typography-fontStyleH4)",
                                                                        "color": "#1B202A",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "38px",
                                                                        "fontWeight": "800",
                                                                        "lineHeight": "46.2px",
                                                                        "padding": {
                                                                            "paddingTop": "0",
                                                                            "paddingRight": "0",
                                                                            "paddingBottom": "0",
                                                                            "paddingLeft": "0"
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "0px",
                                                                            "marginRight": "0px",
                                                                            "marginBottom": "16px",
                                                                            "marginLeft": "0px"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "center",
                                                                        "position": {
                                                                            "position": "relative",
                                                                            "top": "0px",
                                                                            "bottom": "0px",
                                                                            "left": "0px",
                                                                            "right": "0px"
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "0px",
                                                                            "paddingRight": "0px",
                                                                            "paddingBottom": "0px",
                                                                            "paddingLeft": "0px"
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "0px",
                                                                            "marginRight": "0px",
                                                                            "marginBottom": "16px",
                                                                            "marginLeft": "0px"
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "0px",
                                                                            "bottom": "0px",
                                                                            "left": "0px",
                                                                            "right": "0px"
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "0px",
                                                                            "paddingRight": "0px",
                                                                            "paddingBottom": "0px",
                                                                            "paddingLeft": "0px"
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "0px",
                                                                            "marginRight": "0px",
                                                                            "marginBottom": "30px",
                                                                            "marginLeft": "0px"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "componentRender": "videoContainer",
                                                "style": {
                                                    "desktop": {
                                                        "width": "405.76px",
                                                        "height": "303px",
                                                        "aspectRatio": "405.76 / 303.0",
                                                        "borderRadius": "10px",
                                                        "margin": "16px 0",
                                                        "position": "relative",
                                                        "overflow": "hidden",
                                                        "cursor": "pointer"
                                                    },
                                                    "tablet": {},
                                                    "mobile": {}
                                                },
                                                "data": [
                                                    {
                                                        "componentRender": "videoPlayer",
                                                        "src": "video/smart-city.mp4",
                                                        "poster": "video/video-thumb.png",
                                                        "preload": "metadata",
                                                        "style": {
                                                            "desktop": {
                                                                "width": "100%",
                                                                "height": "100%",
                                                                "objectFit": "cover"
                                                            }
                                                        }
                                                    },
                                                    {
                                                        "componentRender": "videoOverlay",
                                                        "show": true,
                                                        "style": {
                                                            "desktop": {
                                                                "position": "absolute",
                                                                "top": "0",
                                                                "left": "0",
                                                                "width": "100%",
                                                                "height": "100%",
                                                                "display": "flex",
                                                                "alignItems": "center",
                                                                "justifyContent": "center"
                                                            },
                                                            "hover": {
                                                                "backgroundColor": "rgba(0, 0, 0, 0.5)"
                                                            }
                                                        },
                                                        "data": [
                                                            {
                                                                "componentRender": "videoIcon",
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontSize": "72px",
                                                                        "color": "white",
                                                                        "borderRadius": "50%",
                                                                        "padding": "10px"
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "section",
                                                "style": {
                                                    "desktop": {
                                                        "marginBottom": "20px"
                                                    }
                                                }
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "1. Get Started Screen"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#1B202A",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "lineHeight": "28.5px",
                                                                        "marginBottom": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "When you launch A2Z POS for the first time, you’ll see the Get Started screen. Tap “Get Started” to begin."
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "marginTop": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "2. Connect to the Internet"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#1B202A",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "lineHeight": "28.5px",
                                                                        "marginBottom": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Choose how your POS system will connect to the internet:"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "marginTop": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "unorderedList",
                                                "style": {
                                                    "desktop": {
                                                        "padding": {
                                                            "paddingTop": "0",
                                                            "paddingRight": "0",
                                                            "paddingBottom": "0",
                                                            "paddingLeft": "0"
                                                        },
                                                        "margin": {
                                                            "marginTop": "6px",
                                                            "marginRight": "",
                                                            "marginBottom": "",
                                                            "marginLeft": "0"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "list-item",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "list-item",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Ethernet (Wired Connection)"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "list-item",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "list-item",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Wi-Fi (Wireless Connection)"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "list-item",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "list-item",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Mobile Data or Tethering"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "3. Set your Time Zone"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#1B202A",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "lineHeight": "28.5px",
                                                                        "marginBottom": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Customize your time settings:"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "marginTop": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "unorderedList",
                                                "style": {
                                                    "desktop": {
                                                        "padding": {
                                                            "paddingTop": "0",
                                                            "paddingRight": "0",
                                                            "paddingBottom": "0",
                                                            "paddingLeft": "0"
                                                        },
                                                        "margin": {
                                                            "marginTop": "6px",
                                                            "marginRight": "",
                                                            "marginBottom": "",
                                                            "marginLeft": "0"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "list-item",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "list-item",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Choose 12-hour or 24-hour format"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "list-item",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "list-item",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Select your state from the dropdown menu"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "4. Log In"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#1B202A",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "lineHeight": "28.5px",
                                                                        "marginBottom": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Enter your registered Email ID and Password. Tap \"Forgot Password\" to reset if needed."
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "marginTop": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "unorderedList",
                                                "style": {
                                                    "desktop": {
                                                        "padding": {
                                                            "paddingTop": "0",
                                                            "paddingRight": "0",
                                                            "paddingBottom": "0",
                                                            "paddingLeft": "0"
                                                        },
                                                        "margin": {
                                                            "marginTop": "6px",
                                                            "marginRight": "",
                                                            "marginBottom": "",
                                                            "marginLeft": "0"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "list-item",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "list-item",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Forgot your password? Tap “Forgot Password” to reset it."
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "• Secure Your Account with Two-Factor Authentication"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#1B202A",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "lineHeight": "28.5px",
                                                                        "marginBottom": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "To enhance security, enter the verification code sent to your registered phone number."
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "marginTop": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "• Verify Store Information"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#1B202A",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "lineHeight": "28.5px",
                                                                        "marginBottom": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Verify your store details: Legal Business Entity Name, Doing Business As (DBA), Store Address, Business Type & Operating Hours"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "marginTop": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "• Create an Admin PIN"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#1B202A",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "lineHeight": "28.5px",
                                                                        "marginBottom": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "paragraph",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Set up a 4-digit PIN for secure access. This PIN will be required for important administrative actions."
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "marginTop": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "paragraph",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Re-enter your Admin PIN to confirm."
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "marginTop": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "• Accept Terms"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#1B202A",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "600",
                                                                        "lineHeight": "28.5px",
                                                                        "marginBottom": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "paragraph",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Read the Terms of Service and tap “Agree and Continue.”"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "marginTop": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "paragraph",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "A pop-up will confirm that your subscription is being activated. Once completed, you’ll see a Welcome Message with two options:"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "marginTop": "4px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "unorderedList",
                                                "style": {
                                                    "desktop": {
                                                        "padding": {
                                                            "paddingTop": "0",
                                                            "paddingRight": "0",
                                                            "paddingBottom": "0",
                                                            "paddingLeft": "0"
                                                        },
                                                        "margin": {
                                                            "marginTop": "6px",
                                                            "marginRight": "",
                                                            "marginBottom": "",
                                                            "marginLeft": "0"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "list-item",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "list-item",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Get Started Now"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "list-item",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "list-item",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "View a Tutorial"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "fontStyle": "",
                                                                        "color": "#787486",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "14px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "28.5px",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginRight": "0",
                                                                            "marginBottom": "0",
                                                                            "marginLeft": "0"
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "",
                                                                        "position": {
                                                                            "position": "",
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "",
                                                                            "bottom": "",
                                                                            "left": "",
                                                                            "right": ""
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "",
                                                                            "marginRight": "",
                                                                            "marginBottom": "",
                                                                            "marginLeft": ""
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "section",
                                                "style": {
                                                    "desktop": {
                                                        "borderRadius": "8px",
                                                        "padding": {
                                                            "paddingTop": "20px",
                                                            "paddingRight": "32px",
                                                            "paddingBottom": "20px",
                                                            "paddingLeft": "32px"
                                                        },
                                                        "backgroundColor": "rgba(116, 126, 209, 0.08)"
                                                    }
                                                }
                                            },
                                            {
                                                "type": "heading",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Need more help?"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "color": "#000",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "24px",
                                                                        "fontWeight": "700",
                                                                        "marginBottom": "12px",
                                                                        "fontStyle": "",
                                                                        "lineHeight": "",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "center",
                                                                        "position": {
                                                                            "position": "relative",
                                                                            "top": "0px",
                                                                            "bottom": "0px",
                                                                            "left": "0px",
                                                                            "right": "0px"
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "0px",
                                                                            "paddingRight": "0px",
                                                                            "paddingBottom": "0px",
                                                                            "paddingLeft": "0px"
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "0px",
                                                                            "marginRight": "0px",
                                                                            "marginBottom": "16px",
                                                                            "marginLeft": "0px"
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "0px",
                                                                            "bottom": "0px",
                                                                            "left": "0px",
                                                                            "right": "0px"
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "0px",
                                                                            "paddingRight": "0px",
                                                                            "paddingBottom": "0px",
                                                                            "paddingLeft": "0px"
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "0px",
                                                                            "marginRight": "0px",
                                                                            "marginBottom": "30px",
                                                                            "marginLeft": "0px"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "paragraph",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "normal",
                                                                        "text": "Post your inquiry on the given contact number or email. Our Company representative will contact you soon."
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "color": "#000",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "16px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "24px",
                                                                        "marginBottom": "20px",
                                                                        "fontStyle": "",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "center",
                                                                        "position": {
                                                                            "position": "relative",
                                                                            "top": "0px",
                                                                            "bottom": "0px",
                                                                            "left": "0px",
                                                                            "right": "0px"
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "0px",
                                                                            "paddingRight": "0px",
                                                                            "paddingBottom": "0px",
                                                                            "paddingLeft": "0px"
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "0px",
                                                                            "marginRight": "0px",
                                                                            "marginBottom": "16px",
                                                                            "marginLeft": "0px"
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "0px",
                                                                            "bottom": "0px",
                                                                            "left": "0px",
                                                                            "right": "0px"
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "0px",
                                                                            "paddingRight": "0px",
                                                                            "paddingBottom": "0px",
                                                                            "paddingLeft": "0px"
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "0px",
                                                                            "marginRight": "0px",
                                                                            "marginBottom": "30px",
                                                                            "marginLeft": "0px"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "section",
                                                "name": "EmailRow",
                                                "style": {
                                                    "desktop": {
                                                        "display": "flex",
                                                        "alignItems": "center",
                                                        "padding": {
                                                            "paddingTop": "0",
                                                            "paddingRight": "0",
                                                            "paddingBottom": "0",
                                                            "paddingLeft": "0"
                                                        },
                                                        "margin": {
                                                            "marginTop": "8px",
                                                            "marginRight": "0",
                                                            "marginBottom": "0",
                                                            "marginLeft": "0"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "icon",
                                                "name": "FaEnvelope",
                                                "style": {
                                                    "desktop": {
                                                        "display": "flex",
                                                        "alignItems": "center",
                                                        "fontSize": "20px",
                                                        "aspectRatio": "1/1",
                                                        "fill": " #747ED1",
                                                        "padding": {
                                                            "paddingTop": "0",
                                                            "paddingRight": "0",
                                                            "paddingBottom": "0",
                                                            "paddingLeft": "0"
                                                        },
                                                        "margin": {
                                                            "marginTop": "0",
                                                            "marginRight": "0",
                                                            "marginBottom": "0",
                                                            "marginLeft": "0"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "type": "paragraph",
                                                "name": "EmailText",
                                                "data": [
                                                    {
                                                        "type": "alignLeft",
                                                        "children": [
                                                            {
                                                                "type": "p",
                                                                "children": [
                                                                    {
                                                                        "lineHeight": "18px",
                                                                        "text": "getsupport@gmail.com"
                                                                    }
                                                                ],
                                                                "style": {
                                                                    "desktop": {
                                                                        "color": "#646464",
                                                                        "fontFamily": "Nunito Sans",
                                                                        "fontSize": "18px",
                                                                        "fontWeight": "400",
                                                                        "lineHeight": "18px",
                                                                        "marginLeft": "8px",
                                                                        "textAlign": "center",
                                                                        "padding": {
                                                                            "paddingTop": "",
                                                                            "paddingRight": "",
                                                                            "paddingBottom": "",
                                                                            "paddingLeft": ""
                                                                        }
                                                                    },
                                                                    "tablet": {
                                                                        "color": "",
                                                                        "fontSize": "",
                                                                        "fontWeight": "",
                                                                        "lineHeight": "",
                                                                        "backgroundColor": "",
                                                                        "textAlign": "center",
                                                                        "position": {
                                                                            "position": "relative",
                                                                            "top": "0px",
                                                                            "bottom": "0px",
                                                                            "left": "0px",
                                                                            "right": "0px"
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "0px",
                                                                            "paddingRight": "0px",
                                                                            "paddingBottom": "0px",
                                                                            "paddingLeft": "0px"
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "0px",
                                                                            "marginRight": "0px",
                                                                            "marginBottom": "16px",
                                                                            "marginLeft": "0px"
                                                                        }
                                                                    },
                                                                    "mobile": {
                                                                        "color": "",
                                                                        "fontsize": "",
                                                                        "fontweight": "",
                                                                        "lineheight": "",
                                                                        "backgroundcolor": "",
                                                                        "textalign": "",
                                                                        "position": {
                                                                            "top": "0px",
                                                                            "bottom": "0px",
                                                                            "left": "0px",
                                                                            "right": "0px"
                                                                        },
                                                                        "padding": {
                                                                            "paddingTop": "0px",
                                                                            "paddingRight": "0px",
                                                                            "paddingBottom": "0px",
                                                                            "paddingLeft": "0px"
                                                                        },
                                                                        "margin": {
                                                                            "marginTop": "0px",
                                                                            "marginRight": "0px",
                                                                            "marginBottom": "30px",
                                                                            "marginLeft": "0px"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ],
                                        "data": [
                                            {
                                                "id": 0,
                                                "src": "video/smart-city.mp4",
                                                "altText": "video",
                                                "poster": "video/video-thumb.png",
                                                "sourceSrc": "https://youtu.be/EngW7tLk6R8?si=o7pYKyDXEXgeTFHZ"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    reducers: {
        setSelcetedItem(state, action) {
            state.SelcetedItem = action.payload;
        },
        clearSelcetedItem(state) {
            state.SelcetedItem = null;
        },
        updateData: (state, action) => {
        },
        updatePosterById(state, action) {
            const { id, newPosterUrl, sourceSrc } = action.payload;

            // Safer nested access with optional chaining and null checks
            const items = state.data?.[0]?.data?.[0]?.data?.[1]?.data?.[0]?.data;
            if (!items) return;

            // Create a new array with the updated item
            state.data[0].data[0].data[1].data[0].data = items.map(item => {
                if (item?.id === id) {  // assuming the id is in item.id
                    return {
                        ...item,
                        sourceSrc: sourceSrc,
                        poster: newPosterUrl
                    };
                }
                return item;
            });
        }
    },
});

export const { setSelcetedItem, clearSelcetedItem, updateData, updatePosterById } = pageBuilderSlice.actions;
export default pageBuilderSlice.reducer;