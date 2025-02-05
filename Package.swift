// swift-tools-version:5.3
import PackageDescription

let package = Package(
    name: "TreeSitterAbapParser",
    products: [
        .library(name: "TreeSitterAbapParser", targets: ["TreeSitterAbapParser"]),
    ],
    dependencies: [
        .package(url: "https://github.com/ChimeHQ/SwiftTreeSitter", from: "0.8.0"),
    ],
    targets: [
        .target(
            name: "TreeSitterAbapParser",
            dependencies: [],
            path: ".",
            sources: [
                "src/parser.c",
                // NOTE: if your language has an external scanner, add it here.
            ],
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("src")]
        ),
        .testTarget(
            name: "TreeSitterAbapParserTests",
            dependencies: [
                "SwiftTreeSitter",
                "TreeSitterAbapParser",
            ],
            path: "bindings/swift/TreeSitterAbapParserTests"
        )
    ],
    cLanguageStandard: .c11
)
