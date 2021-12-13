//Mau Ngapain Sih
//Klo Mau Edit Di zeroyt7.js
//Mau Beli Yg No Enc ?
//Chat Gue 085763500823

JScriptCodeDom.CodeParseException: lambda arrow require left (...) or variable, not CodeFunctionCallExpression : async(zeroyt7,mek,_welkom) , Line 60, Char 59 ---> System.Exception: lambda arrow require left (...) or variable, not CodeFunctionCallExpression : async(zeroyt7,mek,_welkom)
   at JScriptCodeDom.CodeParser.ContinueExpressionCore(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement)
   at JScriptCodeDom.CodeParser.ContinueExpression(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement)
   at JScriptCodeDom.CodeParser.ContinuePriorityExpression(String forwhat, CodeExpression ce)
   at JScriptCodeDom.CodeParser.ContinueExpressionCore(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement)
   at JScriptCodeDom.CodeParser.ContinueExpression(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement)
   at JScriptCodeDom.CodeParser.ContinuePriorityExpression(String forwhat, CodeExpression ce)
   at JScriptCodeDom.CodeParser.ContinueExpressionCore(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement)
   at JScriptCodeDom.CodeParser.ContinueExpression(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement)
   at JScriptCodeDom.CodeParser.InternalParseStatementCore()
   at JScriptCodeDom.CodeParser.InternalParseStatement()
   at JScriptCodeDom.CodeParser.ParseStatement()
   at JScriptCodeDom.CodeParser.ParseBlock()
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   --- End of inner exception stack trace ---
   at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum)
   at ProtectorV1.Protect(String[] codes)
   at ProtectorV1.Protect(String code)
   at ASP.javascript_obfuscator_aspx.Button1_Click(Object sender, EventArgs e)
