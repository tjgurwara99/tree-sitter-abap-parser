package tree_sitter_abap_parser_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_abap_parser "github.com/tjgurwara99/tree-sitter-abap-parser/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_abap_parser.Language())
	if language == nil {
		t.Errorf("Error loading AbapParser grammar")
	}
}
