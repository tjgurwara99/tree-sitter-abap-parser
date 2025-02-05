/**
 * @file A tree sitter parser implementation for the ABAP programming language
 * @author Taj Singh <tjgurwara99@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "abap_parser",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => seq(
      $.introductory_statement,
    ),
    introductory_statement: $ => seq(
      choice(
        $.class_pool,
        $.function_pool,
        $.interface_pool,
        $.program,
        $.report,
        $.type_pool,
      ),
      $.terminate,
    ),
    class_pool: $ => seq(
      "CLASS-POOL",
      optional(
        $._message_id,
      ),
    ),
    function_pool: $ => seq(
      "FUNCTION-POOL",
      optional(
        repeat(
          $.list_options,
        ),
      ),
      optional(
        $._message_id,
      ),
    ),
    list_options: $ => choice(
      seq(
        "NO",
        "STANDARD",
        "PAGE",
        "HEADING",
      ),
      seq(
        "LINE-SIZE",
        $.number,
      ),
      seq(
        "LINE-COUNT",
        seq(
          $.number,
          optional(
            seq(
              "(",
              $.number,
              ")",
            ),
          ),
        ),
      ),
    ),
    interface_pool: $ => "INTERFACE-POOL",
    program: $ => seq(
      "PROGRAM",
      $.identifier,
      optional(
        repeat(
          $.list_options,
        )
      ),
      optional(
        $._message_id,
      ),
      optional(
        $._reduced_functionality,
      ),
    ),
    report: $ => seq(
      "REPORT",
      $.identifier,
      optional(
        repeat(
          $.list_options,
        ),
      ),
      optional(
        $._message_id,
      ),
      optional(
        $._reduced_functionality,
      ),
      optional(
        seq(
          "DEFINING",
          "DATABASE",
          $.identifier,
        )
      )
    ),
    type_pool: $ => seq(
      "TYPE-POOL",
      $.identifier,
    ),
    // _expression: $ => choice(
    //   $.identifier,
    //   $.number,
    // ),
    _reduced_functionality: $ => seq(
      "REDUCED",
      "FUNCTIONALITY",
    ),
    _message_id: $ => seq(
      "MESSAGE-ID",
      $.number,
    ),
    identifier: $ => /[a-z|A-Z]+/,
    number: $ => /[0-9]+/,
    terminate: $ => ".",
  }
});
