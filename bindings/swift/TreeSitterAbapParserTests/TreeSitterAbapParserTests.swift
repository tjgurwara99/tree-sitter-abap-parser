import XCTest
import SwiftTreeSitter
import TreeSitterAbapParser

final class TreeSitterAbapParserTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_abap_parser())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading AbapParser grammar")
    }
}
