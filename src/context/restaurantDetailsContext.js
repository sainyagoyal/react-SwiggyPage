import React, { createContext } from "react";

const RestrauntContext = createContext();

const RestrauntProvider= RestrauntContext.Provider
const RestrauntConsumer =RestrauntContext.Consumer

export {RestrauntConsumer,RestrauntProvider,RestrauntContext}
